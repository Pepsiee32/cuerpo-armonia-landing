import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })

export const metadata: Metadata = {
  title: "Cuerpo y Armonía - Centro de Estética Integral | 15 Años de Experiencia",
  description: "Centro de estética integral en Núñez, Buenos Aires. Tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura. 15 años de experiencia con atención personalizada y profesional.",
  icons: {
    icon: '/logo-no-letter.svg',
    shortcut: '/logo-no-letter.svg',
    apple: '/logo-no-letter.svg',
  },
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
    title: "Cuerpo y Armonía - Centro de Estética Integral | 15 Años de Experiencia",
    description: "Centro de estética integral en Núñez, Buenos Aires. Tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura. 15 años de experiencia con atención personalizada y profesional.",
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
    title: "Cuerpo y Armonía - Centro de Estética Integral | 15 Años de Experiencia",
    description: "Centro de estética integral en Núñez, Buenos Aires. Tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura. 15 años de experiencia con atención personalizada y profesional.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/logo-no-letter.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo-no-letter.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Cuerpo y Armonía",
              "description": "Centro de estética integral en Núñez, Buenos Aires. Tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura. 15 años de experiencia con atención personalizada y profesional.",
              "url": "https://cuerpoyarmonia.com.ar",
              "telephone": "+54-11-6374-6069",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Manuela Pedraza 2457",
                "addressLocality": "Núñez",
                "addressRegion": "Buenos Aires",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.5478,
                "longitude": -58.4567
              },
              "openingHours": "Mo-Fr 09:00-20:00, Sa 09:00-18:00",
              "priceRange": "$$",
              "image": "https://cuerpoyarmonia.com.ar/logo-web.svg",
              "logo": "https://cuerpoyarmonia.com.ar/logo-web.svg",
              "sameAs": [
                "https://instagram.com/cuerpoyarmonia"
              ],
              "serviceType": [
                "Tratamientos Faciales",
                "Tratamientos Corporales", 
                "Belleza de Manos",
                "Depilación Láser",
                "Masajes",
                "Manicura",
                "Pedicura"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Buenos Aires"
              },
              "foundingDate": "2009",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
              }
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
