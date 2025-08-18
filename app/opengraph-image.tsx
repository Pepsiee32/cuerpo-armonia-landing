import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoUrl = 'https://cuerpoyarmonia.com.ar/logo-web.svg' // PNG también sirve
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#FFF9F3' // tu color de marca si querés
      }}>
        <img
          src={logoUrl}
          width={520} height={520}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    size
  )
}
