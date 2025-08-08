"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Palette, Clock, Star, MessageCircle, CheckCircle, Sparkles, Heart, Crown, Eye, Scissors } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function CuidadoUnas() {
  const treatments = [
    {
      name: "Esmaltado Tradicional de Manos",
      description: "Manicura completa con esmaltado tradicional",
      price: "$17.000",
      duration: "60 min",
      benefits: ["Uñas perfectas", "Variedad de colores", "Cuidado completo", "Acabado profesional"],
      icon: Palette,
      image: "/optimized/tradicional3-optimized.webp",
    },
    {
      name: "Esmaltado Semipermanente de Manos",
      description: "Manicura con esmaltado semipermanente de larga duración",
      price: "$20.000",
      duration: "60 min",
      benefits: ["Duración 2-3 semanas", "Brillo intenso", "No se descascara", "Secado inmediato"],
      icon: Palette,
      image: "/optimized/manicura-optimized.webp",
    },
    {
      name: "Capping",
      description: "Refuerzo de la uña natural con gel para lograr mayor resistencia y durabilidad sin extensión.",
      price: "$23.000",
      duration: "90 min",
      benefits: ["Refuerza la uña natural", "Evita quiebres", "Duración prolongada", "Acabado prolijo"],
      icon: Star,
      image: "/optimized/capping2-optimized.webp",
    },
    {
      name: "Soft Gel",
      description: "Extensión de uñas con gel suave para mayor longitud y resistencia",
      price: "$26.000",
      duration: "120 min",
      benefits: ["Uñas más largas", "Mayor resistencia", "Aspecto natural", "Flexibilidad"],
      icon: Star,
      image: "/optimized/softgel-optimized.webp",
    },
    {
      name: "Belleza de Pies + Tradicional",
      description: "Pedicura completa con esmaltado tradicional",
      price: "$20.000",
      duration: "90 min",
      benefits: ["Pies suaves", "Uñas perfectas", "Relajación", "Cuidado completo"],
      icon: Sparkles,
      image: "/optimized/pies2-optimized.webp",
    },
    {
      name: "Belleza de Pies + Semipermanente",
      description: "Pedicura completa con esmaltado semipermanente",
      price: "$22.000",
      duration: "90 min",
      benefits: ["Larga duración", "Pies impecables", "Resistente al agua", "Brillo duradero"],
      icon: Sparkles,
      image: "/optimized/pies1-optimized.webp",
    },
    {
      name: "Perfilado de Cejas",
      description: "Diseño y perfilado de cejas con pinza para definir la forma perfecta",
      price: "$5.000",
      duration: "30 min",
      benefits: ["Cejas definidas", "Forma perfecta", "Realza la mirada", "Resultado inmediato"],
      icon: Eye,
      image: "/optimized/ceja-pesta-optimized.webp",
    },
    {
      name: "Laminado de Cejas",
      description: "Tratamiento que alinea y ordena las cejas para lograr un efecto peinado y natural por varias semanas.",
      price: "$12.000",
      duration: "45 min",
      benefits: ["Efecto peinado duradero", "Cejas más ordenadas", "Realza la expresión", "Acabado natural"],
      icon: Eye,
      image: "/optimized/ceja-pesta-optimized.webp",
    },    
    {
      name: "Laminado de Cejas + Tinte",
      description: "Laminado para ordenar y alinear las cejas junto con tinte para intensificar el color y la forma.",
      price: "$15.000",
      duration: "60 min",
      benefits: ["Cejas destacadas", "Color intenso", "Efecto peinado duradero", "Mirada más expresiva"],
      icon: Eye,
      image: "/optimized/ceja-pesta-optimized.webp",
    },    
    {
      name: "Lifting de Pestañas",
      description: "Técnica que eleva tus pestañas naturales desde la raíz para lograr una curvatura perfecta sin usar extensiones.",
      price: "$16.000",
      duration: "50 min",
      benefits: ["Mirada más abierta", "Curvatura natural", "Sin necesidad de rizador", "Efecto duradero"],
      icon: Eye,
      image: "/optimized/ceja-pesta-optimized.webp",
    },
    {
      name: "Lifting de Pestañas + Tinte",
      description: "Eleva tus pestañas y suma color para intensificar la mirada con un acabado profundo y definido.",
      price: "$18.000",
      duration: "60 min",
      benefits: ["Pestañas más oscuras y curvadas", "Mirada definida", "Efecto natural y duradero", "Ideal para no usar máscara"],
      icon: Eye,
      image: "/optimized/ceja-pesta-optimized.webp",
    },    
  ]

  const nailArtStyles = [
    "Francés clásico y moderno",
    "Diseños geométricos",
    "Flores y motivos naturales",
    "Efectos mármol y degradados",
    "Cristales y brillos",
    "Temáticas estacionales",
  ]

  const nailArtImages = [
    "/optimized/nailart-optimized.webp",
    "/optimized/nailart7-optimized.webp",
    "/optimized/nailart3-optimized.webp",
    "/optimized/nailart1-optimized.webp",
    "/optimized/nailart2-optimized.webp",
    "/optimized/nailart4-optimized.webp",
    "/optimized/nailart5-optimized.webp",
    "/optimized/nailart6-optimized.webp",
    "/optimized/nailart8-optimized.webp",
    // ...agrega todas las que quieras
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-sage hover:text-dark-sage transition-colors text-sm sm:text-base">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Volver al inicio</span>
            <span className="sm:hidden">Inicio</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/logo-no-letter.svg" alt="Cuerpo y Armonia" width={32} height={32} className="sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-xl font-bold text-dark-sage hidden sm:block">Cuerpo y Armonia</span>
            <span className="text-base font-bold text-dark-sage sm:hidden">C&A</span>
          </div>
          <Button
            className="bg-sage hover:bg-dark-sage text-white rounded-full text-sm sm:text-base px-4 sm:px-6 py-3 min-h-[44px]"
            onClick={() => window.open('https://wa.me/5491166108438?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
            aria-label="Reservar turno por WhatsApp"
          >
            <MessageCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Reservar</span>
            <span className="sm:hidden">Reservar</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-sage/10 to-dark-sage/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Belleza de Manos, Cejas y Pestañas</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-dark-sage mb-4 sm:mb-6 px-2">Tu Belleza, en Cada Detalle</h1>
          <p className="text-base sm:text-lg md:text-xl text-sage max-w-3xl mx-auto mb-6 sm:mb-8 px-2 leading-relaxed">
          Descubrí nuestros servicios de uñas, cejas y pestañas. Desde cuidados clásicos hasta diseños personalizados, realzamos tu estilo con precisión, armonía y dedicación.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/5491166108438?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
              aria-label="Consultar disponibilidad por WhatsApp"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Consultar Disponibilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              onClick={() => {
                const section = document.getElementById('nail-art-personalizado');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Ver galería de diseños de nail art"
            >
              Ver Galería de Diseños
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-sage mb-4 px-2">Nuestros Servicios de Belleza</h2>
            <p className="text-base sm:text-lg text-sage max-w-2xl mx-auto px-2">
            Transformamos cada detalle: uñas, cejas y pestañas cuidadas con precisión para resaltar tu estilo, brindándote una experiencia de belleza completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${treatment.name === "Soft Gel" ? "object-bottom" : "object-center"}`}
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">{(() => { const Icon = treatment.icon; return <Icon className="h-4 w-4 sm:h-6 sm:w-6" /> })()}</div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-sage leading-tight">{treatment.name}</h3>
                    <Badge className="bg-sage/10 text-sage border-sage/20 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {treatment.duration}
                    </Badge>
                  </div>
                  <p className="text-sage mb-4 text-sm leading-relaxed">{treatment.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center mb-1 mt-2">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2" />
                      <span className="font-semibold text-dark-sage text-sm sm:text-base">Beneficios:</span>
                    </div>
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm text-sage">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold text-dark-sage">{treatment.price}</span>
                    <Button
                      className="bg-sage hover:bg-dark-sage text-white rounded-full text-sm sm:text-base px-6 sm:px-8 py-3 min-h-[44px]"
                      onClick={() => {
                        const mensaje = encodeURIComponent(`¡Hola! Quiero reservar un turno para ${treatment.name}.`);
                        window.open(`https://wa.me/5491166108438?text=${mensaje}`, "_blank");
                      }}
                      aria-label={`Reservar turno para ${treatment.name}`}
                    >
                      Reservar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nail Art Section */}
      <section id="nail-art-personalizado" className="py-12 sm:py-16 md:py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4 px-2">Nail Art Personalizado</h2>
            <p className="text-cream/80 max-w-2xl mx-auto px-2 text-sm sm:text-base">
              Expresa tu personalidad con nuestros diseños únicos. Nuestras nail artists crean obras de arte en tus uñas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-sage mb-4 sm:mb-6">Estilos Disponibles</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {nailArtStyles.map((style, index) => (
                      <div key={index} className="flex items-center text-sage text-sm sm:text-base">
                        <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-sage mr-2 sm:mr-3 flex-shrink-0" />
                        {style}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-sage/10 rounded-2xl">
                    <h3 className="font-semibold text-dark-sage mb-2 text-sm sm:text-base">¿Tienes una idea específica?</h3>
                    <p className="text-xs sm:text-sm text-sage">
                      Trae tu inspiración y nuestras artistas la harán realidad. También puedes elegir de nuestra
                      galería de diseños.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl h-full flex">
                <CardContent className="h-full w-full p-0 flex">
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden flex-1">
                    <Carousel>
                      <CarouselPrevious className="left-2 z-10" />
                      <CarouselContent>
                        {nailArtImages.map((src, idx) => (
                          <CarouselItem key={idx}>
                            <div className="relative w-full h-64 sm:h-80 md:h-96">
                              <Image 
                                src={src} 
                                alt={`Nail art ${idx + 1}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={85}
                                className="object-cover" 
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselNext className="right-2 z-10" />
                    </Carousel>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-sage to-dark-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mb-4 px-2">Consejos para el Cuidado</h2>
            <p className="text-base sm:text-lg text-cream max-w-2xl mx-auto px-2">
              Mantén tus uñas perfectas por más tiempo con estos consejos profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Hidratación Diaria</h3>
                <p className="text-sage text-sm sm:text-base">
                  Aplica crema hidratante en manos y cutículas todos los días para mantener la piel suave
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Protección</h3>
                <p className="text-sage text-sm sm:text-base">
                  Usa guantes para tareas domésticas y aplica base protectora antes del esmalte
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Mantenimiento</h3>
                <p className="text-sage text-sm sm:text-base">
                  Programa citas regulares cada 2-3 semanas para mantener tus uñas siempre perfectas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-sage mb-4 sm:mb-6 px-2">¿Lista para resaltar tu belleza?</h2>
          <p className="text-base sm:text-lg text-sage mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Reservá tu cita para manos, cejas o pestañas. Nuestro equipo te va a asesorar para que disfrutes una experiencia personalizada y salgas sintiéndote única.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/5491166108438?text=¡Hola!%20Quisiera%20reservar%20una%20cita%20para%20un%20servicio%20de%20belleza%20(uñas%2C%20cejas%20o%20pestañas).%20¿Podrían%20contarme%20la%20disponibilidad%3F', '_blank')}
              aria-label="Reservar cita para servicio de belleza por WhatsApp"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Reservar Cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-6 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-base mb-1"
              onClick={() => window.open("https://instagram.com/safragus", "_blank")}
              aria-label="Ver trabajos realizados en Instagram"
            >
              Ver Trabajos Realizados
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-sage text-white p-3 sm:p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-sm sm:text-base">¿Dudas sobre qué servicio elegir?</p>
            <p className="text-xs sm:text-sm opacity-90">Consulta gratuita por WhatsApp</p>
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full text-sm sm:text-base"
            onClick={() => window.open('https://wa.me/5491166108438?text=¡Hola!%20Me%20gustaría%20recibir%20asesoramiento%20sobre%20los%20servicios%20de%20belleza%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20ayudarme%20a%20elegir%20el%20más%20adecuado%20para%20mí%3F', '_blank')}
            aria-label="Consultar asesoramiento sobre servicios de belleza por WhatsApp"
          >
            <MessageCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Consultar Ahora
          </Button>
        </div>
      </div>
      <div className="h-16 w-full"></div>
    </div>
  )
}
