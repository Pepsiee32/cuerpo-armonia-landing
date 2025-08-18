// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
// export const runtime = 'edge'  // opcional

export default async function Image() {
  // carga el PNG local (evita CORS y SVG)
  const logoBuf = await fetch(new URL('../public/logo-og.png', import.meta.url))
    .then(r => r.arrayBuffer())

  const dataUrl = `data:image/png;base64,${Buffer.from(logoBuf).toString('base64')}`

  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#FFF9F3'
      }}>
        <img
          src={dataUrl}
          width={520}
          height={520}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    size
  )
}
