"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Clock, Star, MessageCircle, CheckCircle, Zap, Waves, Target, Activity, Sparkles, Hand, UserCheck, Droplets, Snowflake, Scissors,Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function TratamientosCorporales() {
  const treatments = [
    {
      name: "Masaje Descontracturante",
      description: "Masaje terapéutico para aliviar tensiones y contracturas musculares",
      price: "$25.000",
      duration: "60 min",
      benefits: ["Alivia tensiones", "Mejora circulación", "Relajación profunda", "Bienestar general"],
      icon: Hand,
      image: "/optimized/ventosas1-optimized.webp",
      tipoTecnicas: ["Piedras Calientes", "Ventosas"]
    },
    {
      name: "Drenaje Linfático Manual",
      description: "Técnica suave que estimula el sistema linfático y mejora la eliminación de toxinas.",
      price: "$25.000",
      duration: "45 min",
      benefits: ["Reduce inflamación","Mejora la circulación", "Desintoxica el cuerpo", "Ideal post operatorios o retención de líquidos"],
      icon: Droplets,
      image: "/optimized/drenaje-optimized.webp",
    },
    {
      name: "Presoterapia + Ondas Rusas",
      description: "Combinación de presoterapia para eliminar líquidos y ondas rusas para tonificar y estimular los músculos.",
      price: "$25.000",
      duration: "60 min",
      benefits: [
        "Mejora circulación y oxigenación",
        "Elimina líquidos retenidos",
        "Tonificación muscular",
        "Ideal para piernas cansadas"
      ],
      icon: Zap,
      image: "/optimized/preso-onda-optimized.webp",
    },
    {
      name: "Crioradiofrecuencia Corporal + Facial",
      description: "Tratamiento reafirmante y oxigenante. Incluye rostro completo y la opción de trabajar 1, 2 o 3 zonas corporales a elección.",
      priceBase: "$19.000",
      priceSecondZone: "$20.000",
      priceThirdZone: "$22.000",
      benefits: [
        "Reafirma rostro y cuerpo",
        "Estimula colágeno y elastina",
        "Efecto tensor sin invasión",
        "Mejora la textura y firmeza de la piel"
      ],
      icon: Snowflake,
      image: "/optimized/crio1-optimized.webp",
      options: [
        { label: "1 zona", price: "$27.000", duration: " ?min" },
        { label: "2 zonas", price: "$31.000", duration: " ?min" },
        { label: "3 zonas", price: "$34.000", duration: " ?min" }
      ],
      zones: ["Abdomen", "Piernas", "Glúteos", "Flancos", "Brazos"]
    },    
    {
      name: "Himfu Corporal",
      description: "Tratamiento focalizado con tecnología HIFU. El precio varía según la cantidad de zonas tratadas.",
      priceBase: "$13.000",
      priceSecondZone: "$17.000",
      priceThirdZone: "$21.000",
      benefits: [
        "Reducción localizada",
        "Tensa la piel",
        "Sin dolor ni invasión",
        "Resultados progresivos"
      ],
      icon: Target,
      image: "/optimized/crio1-optimized.webp",
      options: [
        { label: "1 zona", price: "$13.000", duration: "? min" },
        { label: "2 zonas", price: "$17.000", duration: "? min" },
        { label: "3 zonas", price: "$21.000", duration: "? min" }
      ],
      zones: ["Abdomen", "Flancos", "Glúteos", "Piernas", "Brazos"]
    },
    {
      name: "Depilación",
      description: "Depilación con cera y descartables. Consultá por zonas, precios y disponibilidad.",
      
      duration: "-",
      benefits: ["Higiene y seguridad", "Diferentes zonas", "Atención profesional"],
      icon: Scissors, // O el ícono que prefieras
      image: "/optimized/depi-optimized.webp", // O una imagen alusiva si tenés
      isDepilacion: true // (opcional, para personalizar el renderizado si querés)
    },
    {
      name: "Armonización + Reiki",
      description: "Terapia energética para equilibrar cuerpo y mente con péndulo hebreo y reiki",
      price: "$22.000",
      duration: "60 min",
      benefits: ["Relajación profunda", "Equilibrio emocional", "Reducción del estrés", "Renovación energética"],
      icon: Sun,
      image: "/optimized/rei-optimized.webp",
    },
  ]

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
            onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
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
          <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Tratamientos Corporales</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-dark-sage mb-4 sm:mb-6 px-2">Bienestar para tu Cuerpo</h1>
          <p className="text-base sm:text-lg md:text-xl text-sage max-w-3xl mx-auto mb-6 sm:mb-8 font-light px-2 leading-relaxed">
          Descubrí nuestra línea de tratamientos corporales diseñada para ayudarte a liberar tensiones, activar tu circulación y recuperar tu energía. Desde masajes relajantes hasta cuidados reductivos, cada propuesta se adapta a tus necesidades y objetivos personales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
              aria-label="Consultar disponibilidad por WhatsApp"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Consultar Disponibilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-6 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-base"
              onClick={() => {
                const section = document.getElementById('paquetes-especiales');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Ver paquetes especiales de tratamientos corporales"
            >
              Ver Paquetes Especiales
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark-sage mb-4 px-2">Nuestros Tratamientos Corporales</h2>
            <p className="text-base sm:text-lg text-sage max-w-2xl mx-auto font-light px-2">
            Cada sesión combina técnicas adaptadas a tus objetivos para mejorar tu bienestar, aliviar tensiones y sentirte mejor con tu cuerpo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={treatment.image || "/masajedescon.jpg"}
                      alt={treatment.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-dark-sage leading-tight">{treatment.name}</h3>
                      <Badge className="bg-sage/10 text-sage border-sage/20 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {treatment.duration}
                      </Badge>
                    </div>
                    <p className="text-sage mb-4 text-sm leading-relaxed font-light">{treatment.description}</p>
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
                      {treatment.tipoTecnicas && (
                        <div className="mt-2">
                          <span className="font-semibold text-sage text-xs sm:text-sm">Técnicas: </span>
                          <span className="text-sage text-xs sm:text-sm">{treatment.tipoTecnicas.join(", ")}</span>
                        </div>
                      )}
                      {!treatment.tipoTecnicas && Array.isArray(treatment.zones) && treatment.zones.length > 0 && (
                        <div className="mt-2">
                          <span className="font-semibold text-sage text-xs sm:text-sm">Zonas: </span>
                          <span className="text-sage text-xs sm:text-sm">{treatment.zones.join(", ")}</span>
                        </div>
                      )}
                      {treatment.options && (
                        <div className="mb-2 space-y-1">
                          <span className="font-semibold text-sage text-xs sm:text-sm block">Precios:</span>
                          {treatment.options.map((opt, i) => (
                            <div key={i} className="flex justify-between text-sage text-xs sm:text-sm">
                              <span>
                                {opt.label}
                                {"duration" in opt && opt.duration ? ` - ${opt.duration}` : ""}
                              </span>
                              <span className="font-semibold text-dark-sage">{opt.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-semibold text-dark-sage">{treatment.price}</span>
                      {treatment.isDepilacion ? (
                        <div className="flex flex-col items-center mt-4">
                          <Button
                            className="bg-sage hover:bg-dark-sage text-white rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2"
                            onClick={() => {
                              const mensaje = encodeURIComponent("¡Hola! Quiero consultar por depilación.");
                              // Número específico para depilación
                              const whatsappNumber = "5491140873791";
                              window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank");
                            }}
                            aria-label="Consultar por depilación por WhatsApp"
                          >
                            Consultar por WhatsApp
                          </Button>
                          <span className="text-sage text-xs sm:text-sm mt-2 text-center">Consultá la lista de precios y días disponibles</span>
                        </div>
                      ) : (
                        <Button
                          className="bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base px-6 sm:px-8 py-3 min-h-[44px]"
                          onClick={() => {
                            const mensaje = encodeURIComponent(`¡Hola! Quiero reservar un turno para ${treatment.name}.`);
                            // Número específico para tratamientos especiales
                            const whatsappNumber = ["Crioradiofrecuencia Corporal + Facial", "Himfu Corporal"].includes(treatment.name)
                              ? "5491140873791" // Número específico para estos tratamientos
                              : "5491163746069";
                            window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank");
                          }}
                          aria-label={`Reservar turno para ${treatment.name}`}
                        >
                          Reservar
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section id="paquetes-especiales" className="py-12 sm:py-16 md:py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mb-4 px-2">Paquetes Especiales Corporales</h2>
            <p className="text-cream/80 max-w-2xl mx-auto font-light px-2 text-sm sm:text-base">
            Combiná tratamientos y aprovechá nuestros paquetes diseñados para potenciar resultados y cuidar tu cuerpo con más beneficios.
            </p>
            <p className="text-cream/80 text-xs sm:text-sm mt-2 italic">
              Tenés hasta 45 días desde la compra para usar todas tus sesiones 📅
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <Badge className="bg-sage/10 text-sage border-sage/20 mb-3 sm:mb-4">Más Popular</Badge>
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Equilibrio y Bienestar</h3>
                  <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">4 sesiones que armonizan cuerpo, mente y energía
                    <br></br>
                    <br></br>
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$87.000</div>
                  <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $97.000</p>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Masajes Descontracturantes (60 min c/u)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Armonización + Reiki (60 min)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />1 Drenaje Linfático Manual (45 min)
                  </div>
                </div>
                <Button
                  className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                  onClick={() => {
                    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el "Paquete Equilibrio y Bienestar" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                    window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                  }}
                  aria-label="Consultar paquete equilibrio y bienestar"
                >
                  Consultar Paquete
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-3 sm:mb-4">Resultados Visibles</Badge>
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Detox Circulatorio Integral</h3>
                  <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">4 sesiones diseñadas para activar circulación, eliminar líquidos y relajar el cuerpo</p>
                  <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$90.000</div>
                  <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $100.000</p>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Presoterapia + Ondas Rusas (60 min c/u)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Drenaje Linfático Manual (45 min)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />1 Masaje Descontracturante (60 min)
                  </div>
                </div>
                <Button
                  className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                  onClick={() => {
                    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el "Paquete Detox Circulatorio Integral" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                    window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                  }}
                  aria-label="Consultar paquete detox circulatorio integral"
                >
                  Consultar Paquete
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 basis-[85%]">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
                    <CardContent className="p-6 sm:p-8">
                      <div className="text-center mb-4 sm:mb-6">
                        <Badge className="bg-sage/10 text-sage border-sage/20 mb-3 sm:mb-4">Más Popular</Badge>
                        <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Equilibrio y Bienestar</h3>
                        <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">4 sesiones que armonizan cuerpo, mente y energía
                          <br></br>
                          <br></br>
                        </p>
                        <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$87.000</div>
                        <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $97.000</p>
                      </div>
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Masajes Descontracturantes (60 min c/u)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Armonización + Reiki (60 min)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />1 Drenaje Linfático Manual (45 min)
                        </div>
                      </div>
                      <Button
                        className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                        onClick={() => {
                          const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el "Paquete Equilibrio y Bienestar" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                          window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                        }}
                        aria-label="Consultar paquete equilibrio y bienestar"
                      >
                        Consultar Paquete
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-[85%]">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
                    <CardContent className="p-6 sm:p-8">
                      <div className="text-center mb-4 sm:mb-6">
                        <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-3 sm:mb-4">Resultados Visibles</Badge>
                        <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Detox Circulatorio Integral</h3>
                        <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">4 sesiones diseñadas para activar circulación, eliminar líquidos y relajar el cuerpo</p>
                        <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$90.000</div>
                        <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $100.000</p>
                      </div>
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Presoterapia + Ondas Rusas (60 min c/u)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Drenaje Linfático Manual (45 min)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />1 Masaje Descontracturante (60 min)
                        </div>
                      </div>
                      <Button
                        className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                        onClick={() => {
                          const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el "Paquete Detox Circulatorio Integral" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                          window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                        }}
                        aria-label="Consultar paquete detox circulatorio integral"
                      >
                        Consultar Paquete
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Beneficios Corporales */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-sage to-dark-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mb-4 px-2">¿Por qué elegir nuestros tratamientos corporales?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-sage mb-3 sm:mb-4">Bienestar Real</h3>
                <p className="text-sage text-sm sm:text-base">Tratamientos pensados para cuidar tu cuerpo y reconectar con tu energía.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-sage mb-3 sm:mb-4">Atención Profesional</h3>
                <p className="text-sage text-sm sm:text-base">Más de 15 años de experiencia en técnicas corporales comprobadas.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Hand className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-sage mb-3 sm:mb-4">Cuidado Personalizado</h3>
                <p className="text-sage text-sm sm:text-base">Cada sesión se adapta a tus objetivos físicos y emocionales.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark-sage mb-4 sm:mb-6 px-2">¿Listo para cuidar tu cuerpo?</h2>
          <p className="text-base sm:text-lg text-sage mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Te esperamos con un espacio dedicado a tu bienestar corporal, donde cada sesión está pensada para ayudarte a sentirte bien, por dentro y por fuera.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/5491163746069?text=¡Hola!%20Quisiera%20reservar%20una%20sesión%20corporal%20en%20Cuerpo%20y%20Armonia.%20¿Podrían%20confirmarme%20la%20disponibilidad?', '_blank')}
              aria-label="Reservar sesión corporal por WhatsApp"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Reservar Sesión
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-6 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-base mb-1"
              onClick={() => window.open("https://instagram.com/cuerpoyarmonia", "_blank")}
              aria-label="Ver testimonios en Instagram"
            >
              Ver Testimonios
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-sage text-white p-3 sm:p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-sm sm:text-base">¿Dudas sobre qué tratamiento elegir?</p>
            <p className="text-xs sm:text-sm opacity-90 font-light">Consulta gratuita por WhatsApp</p>
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full font-medium text-sm sm:text-base"
            onClick={() => window.open('https://wa.me/5491163746069?text=Hola!%20Me%20gustaría%20consultar%20por%20los%20tratamientos%20corporales%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20asesorarme%20para%20elegir%20el%20más%20adecuado%20para%20mí?', '_blank')}
            aria-label="Consultar asesoramiento sobre tratamientos corporales por WhatsApp"
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
