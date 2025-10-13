"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sparkles, Clock, Star, MessageCircle, CheckCircle, Droplets, Sun, Zap, Heart, ScanFace, Flame, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function TratamientosFaciales() {
    const treatments = [
        {
        name: "Limpieza Facial Profunda",
        description: "Eliminación de celulas muertas con punta de diamante, extracciones de puntos negros, máscara descongestiva y máscara hidratante.",
        price: "$34.000",
        duration: "90 min",
        benefits: [
          "Renovación y limpieza profunda",
          "Reducción de impurezas y puntos negros",
          "Piel más fresca y luminosa",
          "Hidratación calmante post-extracción"
        ],
        icon: ScanFace,
        image: "/optimized/limpieza-optimized.webp",
        },
        {
          name: "Dermaplaning + Limpieza",
          description: "Eliminación de células muertas y vello facial con bisturí dermatológico, combinada con limpieza profunda para una piel más fresca y renovada.",
          price: "$38.000",
          duration: "60 min",
          benefits: [
            "Piel ultra suave y uniforme",
            "Mayor luminosidad inmediata",
            "Mejor absorción de productos",
            "Acabado sin vello facial"
          ],
          icon: Layers,
          image: "/optimized/dermaplan-limp-optimized.webp",
        },             
        {
          name: "Microneedling Personalizado",
          description: "Aplicación de activos como hialurónico, resveratrol, exosomas, hilos tensores o botox mediante micropunción, logrando un tratamiento más completo y efectivo.",
          price: "$44.000",
          duration: "60 min",
          benefits: [
            "Mejora firmeza y textura de la piel",
            "Atenúa líneas finas",
            "Estimula la regeneración celular",
            "Potencia absorción de principios activos"
          ],
          icon: Droplets,
          image: "/optimized/need2.webp",
        }, 
        {
          name: "Peeling Químico (Green o Gold Peel)",
          description: "Descamación celular profunda con principios activos específicos para tu tipo de piel. Ideal para manchas, textura y firmeza.",
          price: "$44.000",
          duration: "60 min",
          benefits: [
            "Despigmenta manchas y marcas",
            "Renovación celular profunda",
            "Tensión",
            "Activos adaptados: Green o Gold Peel"
          ],
          icon: Flame,
          image: "/optimized/gold2-optimized.webp",
        },        
        {
          name: "Crioradiofrecuencia Facial",
          description: "Un tratamiento no invasivo que combina frío y calor para lograr un efecto tensor, estimular la producción de colágeno y mejorar la firmeza de la piel.",
          price: "$16.000",
          duration: "40 min",
          benefits: [
            "Reafirma y tonifica la piel",
            "Disminuye arrugas y líneas de expresión",
            "Mejora la textura y luminosidad",
            "Estimula la producción de colágeno y elastina"
          ],
          icon: Sparkles,
          image: "/optimized/crio-facial-optimized.webp",
          zones: ["Rostro", "Cuello", "Escote"]
        }
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
            onClick={() => {
              const url = 'https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno';
              if (typeof (window as any).fbq === 'function') {
                (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                (window as any).fbq('trackCustom', 'WhatsAppClick', { href: url });
              }
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
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
          <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Tratamientos Faciales</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-dark-sage mb-4 sm:mb-6 px-2">Cuidado Facial Profesional</h1>
          <p className="text-base sm:text-lg md:text-xl text-sage max-w-3xl mx-auto mb-6 sm:mb-8 font-light px-2 leading-relaxed">
          Descubrí nuestra amplia gama de tratamientos faciales diseñados para todo tipo de piel. Desde limpiezas profundas hasta cuidados anti-edad, combinamos técnicas efectivas y productos de calidad para lograr resultados visibles y duraderos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base"
              onClick={() => {
                const url = 'https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno';
                if (typeof (window as any).fbq === 'function') {
                  (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                  (window as any).fbq('trackCustom', 'WhatsAppClick', { href: url });
                }
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
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
                const section = document.getElementById('paquetes-especiales-faciales');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Ver paquetes especiales de tratamientos faciales"
            >
              Ver Paquetes Especiales
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section id="paquetes-especiales" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark-sage mb-4 px-2">Nuestros Tratamientos Faciales</h2>
            <p className="text-base sm:text-lg text-sage max-w-2xl mx-auto font-light px-2">
            Cada sesión está diseñada para cuidar tu piel, mejorar su apariencia y brindarte un momento de bienestar único.
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
                      src={treatment.image}
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
                      {treatment.zones && (
                        <div className="mt-2">
                          <span className="font-semibold text-sage text-xs sm:text-sm">Zonas incluidas: </span>
                          <span className="text-sage text-xs sm:text-sm">{treatment.zones.join(", ")}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-semibold text-dark-sage">{treatment.price}</span>
                      <Button
                        className="bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base px-6 sm:px-8 py-3 min-h-[44px]"
                        onClick={() => {
                          const mensaje = encodeURIComponent(`¡Hola! Quiero reservar un turno para ${treatment.name}.`);
                          // Número específico para Crioradiofrecuencia Facial
                          const whatsappNumber = treatment.name === "Crioradiofrecuencia Facial" 
                            ? "5491140873791" // Reemplazar con el número específico que desees
                            : "5491163746069";
                          const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
                          if (typeof (window as any).fbq === 'function') {
                            (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                            (window as any).fbq('trackCustom', 'WhatsAppClick', { href: url });
                          }
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                        aria-label={`Reservar turno para ${treatment.name}`}
                      >
                        Reservar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Paquetes Especiales Faciales */}
      <section id="paquetes-especiales-faciales" className="py-12 sm:py-16 md:py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mb-4 px-2">Paquetes Especiales Faciales</h2>
            <p className="text-cream/80 max-w-2xl mx-auto font-light px-2 text-sm sm:text-base">
              Combiná tratamientos y aprovechá nuestros paquetes diseñados para potenciar los resultados y cuidar tu piel con más beneficios.
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
                  <Badge className="bg-sage/10 text-sage border-sage/20 mb-3 sm:mb-4">Renovación Facial</Badge>
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Renovación Facial Profunda</h3>
                  <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">3 sesiones diseñadas para renovar tu piel desde las capas más profundas, unificando el tono, suavizando imperfecciones y devolviendo luminosidad a tu rostro</p>
                  <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$110.000</div>
                  <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $122.000</p>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Limpieza profunda (60 min)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Peelings quimicos (60 min c/u)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Evaluación personalizada de tu piel
                  </div>
                </div>
                <Button
                  className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                  onClick={() => {
                    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el \"Paquete Renovación Facial Profunda\" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                    const urlPack = `https://wa.me/5491163746069?text=${mensaje}`;
                    if (typeof (window as any).fbq === 'function') {
                      (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                      (window as any).fbq('trackCustom', 'WhatsAppClick', { href: urlPack });
                    }
                    window.open(urlPack, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label="Consultar paquete renovación facial profunda"
                >
                  Consultar Paquete
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-3 sm:mb-4">Antiage</Badge>
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Brillo y Rejuvenecimiento</h3>
                  <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">3 sesiones que estimulan tu piel para regenerarse, mejorar su textura y devolverle firmeza, frescura y vitalidad
                    <br></br>
                    <br></br>
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$110.000</div>
                  <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $122.000</p>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Limpieza Profunda (60 min)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Microneedling (60 min c/u)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Diagnóstico y seguimiento personalizado
                  </div>
                </div>
                <Button
                  className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                  onClick={() => {
                    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el \"Paquete Brillo y Rejuvenecimiento\" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                    const urlPack = `https://wa.me/5491163746069?text=${mensaje}`;
                    if (typeof (window as any).fbq === 'function') {
                      (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                      (window as any).fbq('trackCustom', 'WhatsAppClick', { href: urlPack });
                    }
                    window.open(urlPack, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label="Consultar paquete brillo y rejuvenecimiento"
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
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl h-full flex flex-col justify-between">
                    <CardContent className="p-6 sm:p-8 md:p-8 h-full flex flex-col justify-between">
                      <div className="text-center mb-4 sm:mb-6">
                        <Badge className="bg-sage/10 text-sage border-sage/20 mb-3 sm:mb-4">Renovación Facial</Badge>
                        <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Renovación Facial Profunda</h3>
                        <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">3 sesiones diseñadas para renovar tu piel desde las capas más profundas, unificando el tono, suavizando imperfecciones y devolviendo luminosidad a tu rostro</p>
                        <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$110.000</div>
                        <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $122.000</p>
                      </div>
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Limpieza profunda (60 min)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Peelings quimicos (60 min c/u)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Evaluación personalizada de tu piel
                        </div>
                      </div>
                      <Button
                        className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                        onClick={() => {
                          const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el \"Paquete Renovación Facial Profunda\" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                          const urlPack = `https://wa.me/5491163746069?text=${mensaje}`;
                          if (typeof (window as any).fbq === 'function') {
                            (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                            (window as any).fbq('trackCustom', 'WhatsAppClick', { href: urlPack });
                          }
                          window.open(urlPack, '_blank', 'noopener,noreferrer');
                        }}
                        aria-label="Consultar paquete renovación facial profunda"
                      >
                        Consultar Paquete
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-[85%]">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl h-full flex flex-col justify-between">
                    <CardContent className="p-6 sm:p-8 md:p-8 h-full flex flex-col justify-between">
                      <div className="text-center mb-4 sm:mb-6">
                        <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-3 sm:mb-4">Antiage</Badge>
                        <h3 className="text-xl sm:text-2xl font-semibold text-dark-sage mb-2">Paquete Brillo y Rejuvenecimiento</h3>
                        <p className="text-sage mb-3 sm:mb-4 text-sm sm:text-base">3 sesiones que estimulan tu piel para regenerarse, mejorar su textura y devolverle firmeza, frescura y vitalidad
                          <br></br>
                          <br></br>
                        </p>
                        <div className="text-2xl sm:text-3xl font-bold text-dark-sage">$110.000</div>
                        <p className="text-xs sm:text-sm text-sage line-through">Precio individual: $122.000</p>
                      </div>
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />1 Limpieza Profunda (60 min)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />2 Microneedling (60 min c/u)
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-sage">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Diagnóstico y seguimiento personalizado
                        </div>
                      </div>
                      <Button
                        className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium text-sm sm:text-base"
                        onClick={() => {
                          const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el \"Paquete Brillo y Rejuvenecimiento\" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                          const urlPack = `https://wa.me/5491163746069?text=${mensaje}`;
                          if (typeof (window as any).fbq === 'function') {
                            (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                            (window as any).fbq('trackCustom', 'WhatsAppClick', { href: urlPack });
                          }
                          window.open(urlPack, '_blank', 'noopener,noreferrer');
                        }}
                        aria-label="Consultar paquete brillo y rejuvenecimiento"
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

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-sage to-dark-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mb-4 px-2">
              ¿Por qué elegir nuestros tratamientos faciales?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <ScanFace className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-sage mb-3 sm:mb-4">Enfoque Personalizado</h3>
                <p className="text-sage text-sm sm:text-base">Adaptamos cada tratamiento a tu tipo de piel y objetivos estéticos, asegurando una experiencia única.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-sage mb-3 sm:mb-4">Profesionales Certificados</h3>
                <p className="text-sage text-sm sm:text-base">Nuestro equipo tiene más de 15 años de experiencia y formación constante en estética facial.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-sage mb-3 sm:mb-4">Resultados Visibles</h3>
                <p className="text-sage text-sm sm:text-base">Mejoras reales a través de tratamientos pensados para tu bienestar y belleza natural.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-sage mb-4 sm:mb-6 px-2">¿Lista para renovar tu piel?</h2>
          <p className="text-base sm:text-lg text-sage mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Reservá tu sesión para un tratamiento facial personalizado. Nuestro equipo te va a asesorar para que disfrutes una experiencia única y salgas sintiéndote renovada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base"
              onClick={() => {
                const url = 'https://wa.me/5491163746069?text=¡Hola!%20Quisiera%20reservar%20una%20sesión%20para%20un%20tratamiento%20facial.%20¿Podrían%20contarme%20la%20disponibilidad%3F';
                if (typeof (window as any).fbq === 'function') {
                  (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                  (window as any).fbq('trackCustom', 'WhatsAppClick', { href: url });
                }
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
              aria-label="Reservar sesión de tratamiento facial por WhatsApp"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Reservar Sesión
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-6 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-base mb-1"
              onClick={() => window.open("https://instagram.com/cuerpoyarmonia", "_blank")}
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
            <p className="font-semibold text-sm sm:text-base">¿Dudas sobre qué tratamiento elegir?</p>
            <p className="text-xs sm:text-sm opacity-90">Consulta gratuita por WhatsApp</p>
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full text-sm sm:text-base"
            onClick={() => {
              const url = 'https://wa.me/5491163746069?text=¡Hola!%20Me%20gustaría%20recibir%20asesoramiento%20sobre%20los%20tratamientos%20faciales%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20ayudarme%20a%20elegir%20el%20más%20adecuado%20para%20mí%3F';
              if (typeof (window as any).fbq === 'function') {
                (window as any).fbq('track', 'Contact', { channel: 'WhatsApp' });
                (window as any).fbq('trackCustom', 'WhatsAppClick', { href: url });
              }
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            aria-label="Consultar asesoramiento sobre tratamientos faciales por WhatsApp"
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
