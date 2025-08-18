import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Cambiá el nombre si tu archivo es PNG: 'logo-og.png', por ejemplo
  const logo = await fetch(new URL('../public/logo-web.svg', import.meta.url))
    .then(r => r.arrayBuffer())

  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#FFF9F3'
      }}>
        <img src={logo as any} width={520} height={520} style={{ objectFit: 'contain' }} />
      </div>
    ),
    size
  )
}
