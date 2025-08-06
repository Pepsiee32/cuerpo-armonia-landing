# Optimización de Imágenes - Cuerpo y Armonia

## Resumen de Optimizaciones Implementadas

### 1. Configuración de Next.js
- ✅ Habilitada optimización automática de imágenes
- ✅ Soporte para formatos WebP y AVIF
- ✅ Configuración de tamaños de dispositivos y imágenes
- ✅ Cache TTL configurado

### 2. Optimización de Imágenes Principales

| Imagen Original | Tamaño Original | Tamaño Optimizado | Ahorro |
|----------------|----------------|-------------------|---------|
| principal.webp | 209.2 KB | 42.4 KB | 79.7% |
| hero.webp | 141.4 KB | 64.4 KB | 54.5% |
| facial.webp | 141.3 KB | 62.7 KB | 55.6% |
| corporal.jpg | 141.7 KB | 19.4 KB | 86.3% |
| manicura.jpg | 97.6 KB | 75.4 KB | 22.7% |

**Total de ahorro estimado: ~338 KiB**

### 3. Mejoras Implementadas

#### En el Código:
- ✅ Eliminados parámetros de tamaño en URLs de imágenes
- ✅ Agregado atributo `sizes` apropiado para cada imagen
- ✅ Configurado `priority` para imágenes above-the-fold
- ✅ Optimizada calidad de imagen (80-85%)
- ✅ Implementado lazy loading automático

#### Configuraciones por Tipo de Imagen:

**Imágenes Hero (principal.webp, hero.webp):**
- `sizes="100vw"` - Ocupan todo el ancho de la pantalla
- `priority={true}` - Carga prioritaria
- `quality={85}` - Alta calidad para imágenes principales

**Imágenes de Contenido (facial.webp, corporal.jpg, manicura.jpg):**
- `sizes="(max-width: 768px) 100vw, 33vw"` - Responsive sizing
- `quality={80}` - Calidad balanceada
- Lazy loading automático

### 4. Script de Optimización

Se creó un script automatizado (`scripts/optimize-images.js`) que:
- ✅ Convierte imágenes a formato WebP
- ✅ Redimensiona imágenes muy grandes (>1920px)
- ✅ Aplica configuraciones de calidad optimizadas
- ✅ Genera reportes de ahorro de espacio

**Comando para ejecutar:**
```bash
pnpm run optimize-images
```

### 5. Componente OptimizedImage

Se creó un componente reutilizable que:
- ✅ Detecta automáticamente versiones optimizadas
- ✅ Maneja estados de carga con efectos visuales
- ✅ Aplica lazy loading automático
- ✅ Mantiene compatibilidad con Next.js Image

### 6. Mejores Prácticas Aplicadas

1. **Formatos de Imagen:**
   - WebP como formato principal
   - Fallback a formatos originales si es necesario

2. **Tamaños Responsivos:**
   - `100vw` para imágenes hero
   - `(max-width: 768px) 100vw, 50vw` para imágenes medianas
   - `(max-width: 768px) 100vw, 33vw` para imágenes pequeñas

3. **Optimización de Calidad:**
   - 85% para imágenes principales
   - 80% para imágenes de contenido
   - 75% para imágenes de fondo

4. **Lazy Loading:**
   - Automático para imágenes below-the-fold
   - `priority` para imágenes críticas

### 7. Monitoreo y Mantenimiento

Para mantener la optimización:

1. **Ejecutar script de optimización regularmente:**
   ```bash
   pnpm run optimize-images
   ```

2. **Verificar métricas de rendimiento:**
   - Lighthouse Performance Score
   - Core Web Vitals
   - Tiempo de carga de imágenes

3. **Revisar nuevas imágenes:**
   - Agregar al script de optimización
   - Usar componente OptimizedImage
   - Configurar sizes apropiados

### 8. Resultados Esperados

- ✅ Reducción significativa en tiempo de carga
- ✅ Mejora en Core Web Vitals (LCP, CLS)
- ✅ Ahorro de datos móviles
- ✅ Mejor experiencia de usuario
- ✅ Mejor SEO y puntuación de Lighthouse 