import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script";


const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })

export const metadata: Metadata = {
  title: "Cuerpo y Armonía - Centro de Estética Integral en Núñez",
  description: "Centro de estética integral en Núñez, Buenos Aires. 15 años de experiencia en tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NZ0MNES51Y"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NZ0MNES51Y');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel-script"
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />
        <Script id="fb-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1459312481978834');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* WhatsApp click tracking (Meta Pixel custom event) */}
        <Script id="fb-whatsapp-click" strategy="afterInteractive">
          {`
            (function(){
              function handleClick(event){
                var target = event.target;
                while (target && target !== document) {
                  if (target.tagName === 'A') {
                    var href = target.getAttribute('href') || '';
                    if (href.indexOf('wa.me') !== -1) {
                      if (typeof fbq === 'function') {
                        try {
                          fbq('trackCustom', 'WhatsAppClick', {
                            href: href
                          });
                        } catch (e) {}
                      }
                      break;
                    }
                  }
                  target = target.parentNode;
                }
              }
              document.addEventListener('click', handleClick, true);
            })();
          `}
        </Script>
        {/* End Meta Pixel Code */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Cuerpo y Armonía",
              "description": "Centro de estética integral en Núñez, Buenos Aires. 15 años de experiencia en tratamientos faciales, corporales, depilación láser, masajes, manicura y pedicura.",
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
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1459312481978834&ev=PageView&noscript=1" />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
