import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cuerpo y Armonía - Centro de Estética Integral en Núñez",
    description: "Centro de estética integral en Núñez, Buenos Aires. 15 años de experiencia en tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura.",
    keywords: [
      "centro de estética",
      "tratamientos faciales",
      "tratamientos corporales",
      "belleza de manos",
      "depilación láser",
      "masajes",
      "spa",
      "bienestar",
      "Núñez",
      "Buenos Aires",
      "Argentina",
      "cuerpo y armonía",
      "estética integral",
      "cuidado de la piel",
      "manicura",
      "pedicura",
      "lifting de pestañas",
      "perfilado de cejas"
    ],
    authors: [{ name: "Cuerpo y Armonía" }],
    creator: "Cuerpo y Armonía",
    publisher: "Cuerpo y Armonía",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://cuerpoyarmonia.com.ar'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: "Cuerpo y Armonía - Centro de Estética Integral en Núñez",
      description: "Centro de estética integral en Núñez, Buenos Aires. 15 años de experiencia en tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura.",
      url: 'https://cuerpoyarmonia.com.ar',
      siteName: 'Cuerpo y Armonía',
      images: [
        {
          url: '/logo-web.svg',
          width: 1200,
          height: 630,
          alt: 'Cuerpo y Armonía - Centro de Estética Integral',
        },
      ],
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Cuerpo y Armonía - Centro de Estética Integral en Núñez",
      description: "Centro de estética integral en Núñez, Buenos Aires. 15 años de experiencia en tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura.",
      images: ['/logo-web.svg'],
      creator: '@cuerpoyarmonia',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'health',
    classification: 'spa and wellness',
    generator: 'Next.js',
    manifest: '/manifest.json'
  }
}
