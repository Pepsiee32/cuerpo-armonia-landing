const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Imágenes que SÍ se usan en el código
const usedImages = [
  // Logos
  'logo-no-letter.svg',
  'logo-web.svg',
  
  // Imágenes de fallback
  'masajedescon.jpg',
  
  // Imágenes optimizadas (no eliminar las originales por ahora)
  // Las originales se mantienen como backup
];

// Imágenes que NO se usan y se pueden eliminar
const unusedImages = [
  // Logos no utilizados
  'logo.svg',
  
  // Imágenes duplicadas o no utilizadas
  'tradicional.jpg',
  'tradicional2.jpg',
  'capping.webp',
  'faci.webp',
  'gold1.webp',
  'crio.jpg',
  'test2.jpg',
  'promofacial.jpg',
  'suscr.webp',
  
  // Imágenes de nail art que no están en el array nailArtImages
  // (solo se usan las optimizadas)
];

function cleanupUnusedImages() {
  console.log('🧹 Iniciando limpieza de imágenes no utilizadas...\n');
  
  let totalSizeSaved = 0;
  let filesDeleted = 0;
  
  for (const imageName of unusedImages) {
    const imagePath = path.join(publicDir, imageName);
    
    if (fs.existsSync(imagePath)) {
      try {
        const stats = fs.statSync(imagePath);
        const sizeInKB = (stats.size / 1024).toFixed(1);
        
        fs.unlinkSync(imagePath);
        totalSizeSaved += stats.size;
        filesDeleted++;
        
        console.log(`✅ Eliminada: ${imageName} (${sizeInKB} KB)`);
      } catch (error) {
        console.error(`❌ Error eliminando ${imageName}:`, error.message);
      }
    } else {
      console.log(`⚠️  No encontrada: ${imageName}`);
    }
  }
  
  console.log('\n📊 Resumen de limpieza:');
  console.log(`📁 Archivos eliminados: ${filesDeleted}`);
  console.log(`💾 Espacio liberado: ${(totalSizeSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💰 Tamaño total ahorrado: ${(totalSizeSaved / 1024).toFixed(1)} KB`);
  
  if (filesDeleted > 0) {
    console.log('\n✨ Limpieza completada exitosamente!');
  } else {
    console.log('\nℹ️  No se encontraron archivos para eliminar.');
  }
}

// Función para mostrar estadísticas del directorio
function showDirectoryStats() {
  console.log('📊 Estadísticas del directorio /public:\n');
  
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(ext);
  });
  
  let totalSize = 0;
  const fileStats = [];
  
  for (const file of imageFiles) {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    const sizeInKB = (stats.size / 1024).toFixed(1);
    totalSize += stats.size;
    
    fileStats.push({
      name: file,
      size: stats.size,
      sizeKB: sizeInKB
    });
  }
  
  // Ordenar por tamaño (más grandes primero)
  fileStats.sort((a, b) => b.size - a.size);
  
  console.log('📁 Archivos de imagen encontrados:');
  fileStats.forEach(file => {
    const status = unusedImages.includes(file.name) ? '🗑️  (NO USADO)' : '✅ (USADO)';
    console.log(`   ${file.name} - ${file.sizeKB} KB ${status}`);
  });
  
  console.log(`\n📈 Total: ${imageFiles.length} archivos`);
  console.log(`💾 Tamaño total: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  const unusedSize = fileStats
    .filter(file => unusedImages.includes(file.name))
    .reduce((sum, file) => sum + file.size, 0);
  
  console.log(`🗑️  Espacio que se puede liberar: ${(unusedSize / 1024 / 1024).toFixed(2)} MB`);
}

// Ejecutar limpieza
if (process.argv.includes('--stats')) {
  showDirectoryStats();
} else {
  cleanupUnusedImages();
} 