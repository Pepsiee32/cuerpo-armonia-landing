const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Crear directorio de imágenes optimizadas si no existe
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Lista de imágenes a optimizar con configuraciones específicas
const imagesToOptimize = [
  { 
    input: 'principal.webp', 
    output: 'principal-optimized.webp',
    config: { quality: 80, effort: 6 }
  },
  { 
    input: 'hero.webp', 
    output: 'hero-optimized.webp',
    config: { quality: 75, effort: 6 }
  },
  { 
    input: 'facial.webp', 
    output: 'facial-optimized.webp',
    config: { quality: 75, effort: 6 }
  },
  { 
    input: 'corporal.jpg', 
    output: 'corporal-optimized.webp',
    config: { quality: 85, effort: 6 }
  },
  { 
    input: 'manicura.jpg', 
    output: 'manicura-optimized.webp',
    config: { quality: 85, effort: 6 }
  },
];

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const inputFullPath = path.join(publicDir, inputPath);
    const outputFullPath = path.join(optimizedDir, outputPath);
    
    if (!fs.existsSync(inputFullPath)) {
      console.log(`⚠️  Imagen no encontrada: ${inputPath}`);
      return;
    }

    // Obtener información de la imagen original
    const imageInfo = await sharp(inputFullPath).metadata();
    
    // Redimensionar si la imagen es muy grande
    let sharpInstance = sharp(inputFullPath);
    
    // Para imágenes muy grandes, redimensionar primero
    if (imageInfo.width > 1920 || imageInfo.height > 1920) {
      sharpInstance = sharpInstance.resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    await sharpInstance
      .webp(config)
      .toFile(outputFullPath);
    
    const originalSize = fs.statSync(inputFullPath).size;
    const optimizedSize = fs.statSync(outputFullPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${inputPath} → ${outputPath}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB (${imageInfo.width}x${imageInfo.height})`);
    console.log(`   Optimizada: ${(optimizedSize / 1024).toFixed(1)} KB`);
    console.log(`   Ahorro: ${savings}%`);
    console.log(`   Config: quality=${config.quality}, effort=${config.effort}`);
    console.log('');
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image.input, image.output, image.config);
  }
  
  console.log('✨ Optimización completada!');
  console.log(`📁 Imágenes optimizadas guardadas en: ${optimizedDir}`);
}

optimizeAllImages().catch(console.error); 