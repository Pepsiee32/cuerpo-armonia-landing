const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function calculateSavings(originalSize, optimizedSize) {
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
  return savings;
}

function checkImagePerformance() {
  console.log('📊 Análisis de Rendimiento de Imágenes\n');

  if (!fs.existsSync(optimizedDir)) {
    console.log('❌ No se encontró el directorio de imágenes optimizadas');
    return;
  }

  const optimizedFiles = fs.readdirSync(optimizedDir);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let totalSavings = 0;

  console.log('📋 Resumen de Optimización:');
  console.log('─'.repeat(80));

  optimizedFiles.forEach(file => {
    if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
      const optimizedPath = path.join(optimizedDir, file);
      const optimizedSize = fs.statSync(optimizedPath).size;
      
      // Buscar archivo original
      const originalName = file.replace('-optimized.webp', '');
      const possibleExtensions = ['.webp', '.jpg', '.jpeg', '.png'];
      let originalPath = null;
      let originalSize = 0;

      for (const ext of possibleExtensions) {
        const testPath = path.join(publicDir, originalName + ext);
        if (fs.existsSync(testPath)) {
          originalPath = testPath;
          originalSize = fs.statSync(testPath).size;
          break;
        }
      }

      if (originalPath) {
        const savings = calculateSavings(originalSize, optimizedSize);
        totalOriginalSize += originalSize;
        totalOptimizedSize += optimizedSize;

        console.log(`✅ ${originalName}`);
        console.log(`   Original: ${formatBytes(originalSize)}`);
        console.log(`   Optimizada: ${formatBytes(optimizedSize)}`);
        console.log(`   Ahorro: ${savings}%`);
        console.log('');
      }
    }
  });

  const totalSavingsPercent = calculateSavings(totalOriginalSize, totalOptimizedSize);
  
  console.log('📈 Totales:');
  console.log('─'.repeat(40));
  console.log(`Tamaño Original Total: ${formatBytes(totalOriginalSize)}`);
  console.log(`Tamaño Optimizado Total: ${formatBytes(totalOptimizedSize)}`);
  console.log(`Ahorro Total: ${totalSavingsPercent}%`);
  console.log(`Espacio Ahorrado: ${formatBytes(totalOriginalSize - totalOptimizedSize)}`);

  // Recomendaciones
  console.log('\n💡 Recomendaciones:');
  console.log('─'.repeat(40));
  
  if (totalSavingsPercent > 50) {
    console.log('✅ Excelente optimización! Las imágenes están muy bien comprimidas.');
  } else if (totalSavingsPercent > 30) {
    console.log('✅ Buena optimización. Considera ajustar la calidad si es necesario.');
  } else {
    console.log('⚠️  Optimización moderada. Revisa la configuración de calidad.');
  }

  if (totalOptimizedSize > 1024 * 1024) { // Más de 1MB
    console.log('⚠️  El tamaño total de imágenes es alto. Considera lazy loading adicional.');
  }

  console.log('\n🚀 Para mejorar aún más:');
  console.log('1. Usa el componente OptimizedImage en tu código');
  console.log('2. Configura sizes apropiados para cada imagen');
  console.log('3. Implementa lazy loading para imágenes below-the-fold');
  console.log('4. Considera usar formatos AVIF para navegadores modernos');
}

checkImagePerformance(); 