import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #8fbc8f 0%, #6b8e6b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              lineHeight: 1.2,
            }}
          >
            Cuerpo y Armonía
          </h1>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '500',
              margin: '0 0 30px 0',
              opacity: 0.9,
            }}
          >
            Centro de Estética Integral
          </h2>
          <p
            style={{
              fontSize: '24px',
              margin: '0',
              opacity: 0.8,
              maxWidth: '800px',
            }}
          >
            15 años de experiencia en belleza y bienestar
          </p>
          <p
            style={{
              fontSize: '20px',
              margin: '20px 0 0 0',
              opacity: 0.7,
            }}
          >
            Núñez, Buenos Aires
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 