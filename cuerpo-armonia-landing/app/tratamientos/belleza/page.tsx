"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Palette, Clock, Star, MessageCircle, CheckCircle, Sparkles, Heart, Crown, Eye, Scissors } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function CuidadoUnas() {
  const treatments = [
    {
      name: "Esmaltado Tradicional de Manos",
      description: "Manicura completa con esmaltado tradicional",
      price: "$13.000",
      duration: "45 min",
      benefits: ["Uñas perfectas", "Variedad de colores", "Cuidado completo", "Acabado profesional"],
      icon: Palette,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Esmaltado Semipermanente de Manos",
      description: "Manicura con esmaltado semipermanente de larga duración",
      price: "$15.000",
      duration: "60 min",
      benefits: ["Duración 2-3 semanas", "Brillo intenso", "No se descascara", "Secado inmediato"],
      icon: Palette,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Capping",
      description: "Refuerzo de la uña natural con gel para lograr mayor resistencia y durabilidad sin extensión.",
      price: "$17.000",
      duration: "90 min",
      benefits: ["Refuerza la uña natural", "Evita quiebres", "Duración prolongada", "Acabado prolijo"],
      icon: Star,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Soft Gel",
      description: "Extensión de uñas con gel suave para mayor longitud y resistencia",
      price: "$20.000",
      duration: "90 min",
      benefits: ["Uñas más largas", "Mayor resistencia", "Aspecto natural", "Flexibilidad"],
      icon: Star,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Belleza de Pies + Tradicional",
      description: "Pedicura completa con esmaltado tradicional",
      price: "$15.000",
      duration: "60 min",
      benefits: ["Pies suaves", "Uñas perfectas", "Relajación", "Cuidado completo"],
      icon: Sparkles,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Belleza de Pies + Semipermanente",
      description: "Pedicura completa con esmaltado semipermanente",
      price: "$17.000",
      duration: "75 min",
      benefits: ["Larga duración", "Pies impecables", "Resistente al agua", "Brillo duradero"],
      icon: Sparkles,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Perfilado de Cejas",
      description: "Diseño y perfilado de cejas con pinza para definir la forma perfecta",
      price: "$5.000",
      duration: "30 min",
      benefits: ["Cejas definidas", "Forma perfecta", "Realza la mirada", "Resultado inmediato"],
      icon: Eye,
      image: "/ceja-pesta.jpg?height=300&width=400",
    },
    {
      name: "Laminado de Cejas",
      description: "Tratamiento que alinea y ordena las cejas para lograr un efecto peinado y natural por varias semanas.",
      price: "$12.000",
      duration: "45 min",
      benefits: ["Efecto peinado duradero", "Cejas más ordenadas", "Realza la expresión", "Acabado natural"],
      icon: Eye,
      image: "/ceja-pesta.jpg?height=300&width=400",
    },    
    {
      name: "Laminado de Cejas + Tinte",
      description: "Laminado para ordenar y alinear las cejas junto con tinte para intensificar el color y la forma.",
      price: "$15.000",
      duration: "60 min",
      benefits: ["Cejas destacadas", "Color intenso", "Efecto peinado duradero", "Mirada más expresiva"],
      icon: Eye,
      image: "/ceja-pesta.jpg?height=300&width=400",
    },    
    {
      name: "Lifting de Pestañas",
      description: "Técnica que eleva tus pestañas naturales desde la raíz para lograr una curvatura perfecta sin usar extensiones.",
      price: "$16.000",
      duration: "50 min",
      benefits: ["Mirada más abierta", "Curvatura natural", "Sin necesidad de rizador", "Efecto duradero"],
      icon: Eye,
      image: "/ceja-pesta.jpg?height=300&width=400",
    },
    {
      name: "Lifting de Pestañas + Tinte",
      description: "Eleva tus pestañas y suma color para intensificar la mirada con un acabado profundo y definido.",
      price: "$18.000",
      duration: "60 min",
      benefits: ["Pestañas más oscuras y curvadas", "Mirada definida", "Efecto natural y duradero", "Ideal para no usar máscara"],
      icon: Eye,
      image: "/ceja-pesta.jpg?height=300&width=400",
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
    "/nailart1.webp",
    "/nailart2.webp",
    "/nailart3.webp",
    // ...agrega todas las que quieras
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-sage hover:text-dark-sage transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/logo-no-letter.svg" alt="Cuerpo y Armonia" width={40} height={40} />
            <span className="text-xl font-bold text-dark-sage">Cuerpo y Armonia</span>
          </div>
          <Button
            className="bg-sage hover:bg-dark-sage text-white rounded-full"
            onClick={() => window.open('https://wa.me/5491166108438?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Reservar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-sage/10 to-dark-sage/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Belleza de Manos, Cejas y Pestañas</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-sage mb-6">Tu Belleza, en Cada Detalle</h1>
          <p className="text-xl text-sage max-w-3xl mx-auto mb-8">
          Descubrí nuestros servicios de uñas, cejas y pestañas. Desde cuidados clásicos hasta diseños personalizados, realzamos tu estilo con precisión, armonía y dedicación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-8 py-4 rounded-full"
              onClick={() => window.open('https://wa.me/5491166108438?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar Disponibilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-8 py-4"
              onClick={() => {
                const section = document.getElementById('nail-art-personalizado');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Galería de Diseños
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-sage mb-4">Nuestros Servicios de Belleza</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto">
            Transformamos cada detalle: uñas, cejas y pestañas cuidadas con precisión para resaltar tu estilo, brindándote una experiencia de belleza completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">{(() => { const Icon = treatment.icon; return <Icon className="h-6 w-6" /> })()}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-dark-sage">{treatment.name}</h3>
                    <Badge className="bg-sage/10 text-sage border-sage/20 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {treatment.duration}
                    </Badge>
                  </div>
                  <p className="text-sage mb-4 text-sm leading-relaxed">{treatment.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center mb-1 mt-2">
                      <Heart className="w-4 h-4 text-pink-500 mr-2" />
                      <span className="font-semibold text-dark-sage text-base">Beneficios:</span>
                    </div>
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-sage">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-dark-sage">{treatment.price}</span>
                    <Button
                      size="sm"
                      className="bg-sage hover:bg-dark-sage text-white rounded-full"
                      onClick={() => {
                        const mensaje = encodeURIComponent(`¡Hola! Quiero reservar un turno para ${treatment.name}.`);
                        window.open(`https://wa.me/5491166108438?text=${mensaje}`, "_blank");
                      }}
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
      <section id="nail-art-personalizado" className="py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">Nail Art Personalizado</h2>
            <p className="text-cream/80 max-w-2xl mx-auto">
              Expresa tu personalidad con nuestros diseños únicos. Nuestras nail artists crean obras de arte en tus uñas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-dark-sage mb-6">Estilos Disponibles</h3>
                  <div className="space-y-3">
                    {nailArtStyles.map((style, index) => (
                      <div key={index} className="flex items-center text-sage">
                        <Palette className="h-4 w-4 text-sage mr-3 flex-shrink-0" />
                        {style}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-sage/10 rounded-2xl">
                    <h4 className="font-semibold text-dark-sage mb-2">¿Tienes una idea específica?</h4>
                    <p className="text-sm text-sage">
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
                  <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden flex-1">
                    <Carousel>
                      <CarouselContent>
                        {nailArtImages.map((src, idx) => (
                          <CarouselItem key={idx}>
                            <div className="relative w-full h-80 md:h-96 h-full">
                              <Image src={src} alt={`Nail art ${idx + 1}`} fill className="object-cover" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-sage mb-4">Consejos para el Cuidado</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto">
              Mantén tus uñas perfectas por más tiempo con estos consejos profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Hidratación Diaria</h3>
                <p className="text-sage">
                  Aplica crema hidratante en manos y cutículas todos los días para mantener la piel suave
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Protección</h3>
                <p className="text-sage">
                  Usa guantes para tareas domésticas y aplica base protectora antes del esmalte
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Mantenimiento</h3>
                <p className="text-sage">
                  Programa citas regulares cada 2-3 semanas para mantener tus uñas siempre perfectas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-sage">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">¿Lista para resaltar tu belleza?</h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
          Reservá tu cita para manos, cejas o pestañas. Nuestro equipo te va a asesorar para que disfrutes una experiencia personalizada y salgas sintiéndote única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream hover:bg-cream/90 text-dark-sage px-8 py-4 rounded-full font-semibold"
              onClick={() => window.open('https://wa.me/5491166108438?text=¡Hola!%20Quisiera%20reservar%20una%20cita%20para%20un%20servicio%20de%20belleza%20(uñas%2C%20cejas%20o%20pestañas).%20¿Podrían%20contarme%20la%20disponibilidad%3F', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar Cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-dark-sage rounded-full bg-transparent px-8 py-4"
              onClick={() => window.open("https://instagram.com/safragus", "_blank")}
            >
              Ver Trabajos Realizados
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-sage text-white p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold">¿Dudas sobre qué servicio elegir?</p>
            <p className="text-sm opacity-90">Consulta gratuita por WhatsApp</p>
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full"
            onClick={() => window.open('https://wa.me/5491166108438?text=¡Hola!%20Me%20gustaría%20recibir%20asesoramiento%20sobre%20los%20servicios%20de%20belleza%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20ayudarme%20a%20elegir%20el%20más%20adecuado%20para%20mí%3F', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Consultar Ahora
          </Button>
        </div>
      </div>
      <div className="h-16 w-full"></div>
    </div>
  )
}
