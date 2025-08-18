// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const runtime = 'nodejs'              // <— clave
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export default function Image() {
  // Asegurate de tener public/logo-og.png
  const filePath = path.join(process.cwd(), 'public', 'logo-og.png')
  const buf = readFileSync(filePath)
  const dataUrl = `data:image/png;base64,${buf.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#FFF9F3'
        }}
      >
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
