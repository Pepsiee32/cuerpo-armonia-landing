"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Clock, Star, MessageCircle, CheckCircle, Zap, Waves, Target, Activity, Sparkles, Hand, UserCheck, Droplets, Snowflake, Scissors,Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TratamientosCorporales() {
  const treatments = [
    {
      name: "Masaje Descontracturante",
      description: "Masaje terapéutico para aliviar tensiones y contracturas musculares",
      price: "$21.000",
      duration: "60 min",
      benefits: ["Alivia tensiones", "Mejora circulación", "Relajación profunda", "Bienestar general"],
      icon: Hand,
      image: "/masajedescon.jpg?height=300&width=400",
    },
    {
      name: "Drenaje Linfático Manual",
      description: "Técnica suave que estimula el sistema linfático y mejora la eliminación de toxinas.",
      price: "$21.000",
      duration: "45 min",
      benefits: ["Reduce inflamación","Mejora la circulación", "Desintoxica el cuerpo", "Ideal post operatorios o retención de líquidos"],
      icon: Droplets,
      image: "/drenaje.jpg?height=300&width=400",
    },
    {
      name: "Presoterapia + Ondas Rusas",
      description: "Combinación de presoterapia para eliminar líquidos y ondas rusas para tonificar y estimular los músculos.",
      price: "$",
      duration: "60 min",
      benefits: [
        "Mejora circulación y oxigenación",
        "Elimina líquidos retenidos",
        "Tonificación muscular",
        "Ideal para piernas cansadas"
      ],
      icon: Zap,
      image: "/preso-onda.jpg?height=300&width=400",
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
      image: "/crio1.jpg?height=300&width=400",
      options: [
        { label: "1 zona", price: "$19.000", duration: " ?min" },
        { label: "2 zonas", price: "$20.000", duration: " ?min" },
        { label: "3 zonas", price: "$22.000", duration: " ?min" }
      ],
      zones: ["Abdomen", "Piernas", "Glúteos", "Flancos", "Brazos"]
    },    
    {
      name: "Himfu Corporal",
      description: "Tratamiento focalizado con tecnología HIFU. El precio varía según la cantidad de zonas tratadas.",
      priceBase: "$12.000",
      priceSecondZone: "$14.000",
      priceThirdZone: "$16.000",
      benefits: [
        "Reducción localizada",
        "Tensa la piel",
        "Sin dolor ni invasión",
        "Resultados progresivos"
      ],
      icon: Target,
      image: "/crio1.jpg?height=300&width=400",
      options: [
        { label: "1 zona", price: "$12.000", duration: "? min" },
        { label: "2 zonas", price: "$14.000", duration: "? min" },
        { label: "3 zonas", price: "$16.000", duration: "? min" }
      ],
      zones: ["Abdomen", "Flancos", "Glúteos", "Piernas", "Brazos"]
    },
    {
      name: "Depilación",
      description: "Depilación con cera y descartables. Consultá por zonas, precios y disponibilidad.",
      
      duration: "-",
      benefits: ["Higiene y seguridad", "Diferentes zonas", "Atención profesional"],
      icon: Scissors, // O el ícono que prefieras
      image: "/depi.jpg?height=300&width=400", // O una imagen alusiva si tenés
      isDepilacion: true // (opcional, para personalizar el renderizado si querés)
    },
    {
      name: "Armonización + Reiki",
      description: "Terapia energética para equilibrar cuerpo y mente con péndulo hebreo y reiki",
      price: "$21.000",
      duration: "60 min",
      benefits: ["Relajación profunda", "Equilibrio emocional", "Reducción del estrés", "Renovación energética"],
      icon: Sun,
      image: "/rei.jpg?height=300&width=400",
    },
  ]

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
            onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Reservar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-sage/10 to-dark-sage/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Tratamientos Corporales</Badge>
          <h1 className="text-4xl md:text-6xl font-semibold text-dark-sage mb-6">Bienestar para tu Cuerpo</h1>
          <p className="text-xl text-sage max-w-3xl mx-auto mb-8 font-light">
          Descubrí nuestra línea de tratamientos corporales diseñada para ayudarte a liberar tensiones, activar tu circulación y recuperar tu energía. Desde masajes relajantes hasta cuidados reductivos, cada propuesta se adapta a tus necesidades y objetivos personales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-8 py-4 rounded-full font-medium"
              onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar Disponibilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-8 py-4 font-medium"
              onClick={() => {
                const section = document.getElementById('paquetes-especiales');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Paquetes Especiales
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-sage mb-4">Nuestros Tratamientos Corporales</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto font-light">
            Cada sesión combina técnicas adaptadas a tus objetivos para mejorar tu bienestar, aliviar tensiones y sentirte mejor con tu cuerpo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
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
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-dark-sage">{treatment.name}</h3>
                      <Badge className="bg-sage/10 text-sage border-sage/20 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {treatment.duration}
                      </Badge>
                    </div>
                    <p className="text-sage mb-4 text-sm leading-relaxed font-light">{treatment.description}</p>
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
                      {treatment.zones && (
                        <div className="mt-2">
                          <span className="font-semibold text-sage">Zonas: </span>
                          <span className="text-sage">{treatment.zones.join(", ")}</span>
                        </div>
                      )}
                      {treatment.options && (
                        <div className="mb-2 space-y-1">
                          <span className="font-semibold text-sage block">Precios:</span>
                          {treatment.options.map((opt, i) => (
                            <div key={i} className="flex justify-between text-sage text-sm">
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
                      <span className="text-lg font-semibold text-dark-sage">{treatment.price}</span>
                      {treatment.isDepilacion ? (
                        <div className="flex flex-col items-center mt-4">
                          <Button
                            className="bg-sage hover:bg-dark-sage text-white rounded-full"
                            onClick={() => {
                              const mensaje = encodeURIComponent("¡Hola! Quiero consultar por depilación.");
                              window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                            }}
                          >
                            Consultar por WhatsApp
                          </Button>
                          <span className="text-sage text-sm mt-2">Consultá la lista de precios y días disponibles</span>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-sage hover:bg-dark-sage text-white rounded-full font-medium"
                          onClick={() => {
                            const mensaje = encodeURIComponent(`¡Hola! Quiero reservar un turno para ${treatment.name}.`);
                            window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                          }}
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
      <section id="paquetes-especiales" className="py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-cream mb-4">Paquetes Especiales</h2>
            <p className="text-cream/80 max-w-2xl mx-auto font-light">
            Combiná tratamientos y aprovechá nuestros paquetes diseñados para potenciar resultados y cuidar tu cuerpo con más beneficios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Más Popular</Badge>
                  <h3 className="text-2xl font-semibold text-dark-sage mb-2">Paquete Relajación Total</h3>
                  <p className="text-sage mb-4">4 sesiones de masaje relajante + drenaje linfático</p>
                  <div className="text-3xl font-bold text-dark-sage">$45.000</div>
                  <p className="text-sm text-sage line-through">Precio individual: $54.000</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />4 Masajes relajantes (60 min c/u)
                  </div>
                  <div className="flex items-center text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />2 Drenajes linfáticos (75 min c/u)
                  </div>
                  <div className="flex items-center text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Consulta personalizada incluida
                  </div>
                </div>
                <Button
                  className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium"
                  onClick={() => {
                    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el "Paquete Relajación Total" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                    window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                  }}
                >
                  Consultar Paquete
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4">Resultados Visibles</Badge>
                  <h3 className="text-2xl font-semibold text-dark-sage mb-2">Paquete Reductivo</h3>
                  <p className="text-sage mb-4">6 sesiones combinadas para lograr un cambio visible</p>
                  <div className="text-3xl font-bold text-dark-sage">$95.000</div>
                  <p className="text-sm text-sage line-through">Precio individual: $108.000</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />3 Tratamientos reductivos (90 min c/u)
                  </div>
                  <div className="flex items-center text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />3 Radiofrecuencias corporales (60 min c/u)
                  </div>
                  <div className="flex items-center text-sm text-sage">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Plan nutricional básico incluido
                  </div>
                </div>
                <Button
                  className="w-full bg-sage hover:bg-dark-sage text-white rounded-full font-medium"
                  onClick={() => {
                    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado/a en el "Paquete Reductivo" ¿Podrían contarme más sobre las opciones y disponibilidad?`);
                    window.open(`https://wa.me/5491163746069?text=${mensaje}`, "_blank");
                  }}
                >
                  Consultar Paquete
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios Corporales */}
      <section className="py-20 px-4 bg-gradient-to-r from-sage to-dark-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-cream mb-4">¿Por qué elegir nuestros tratamientos corporales?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-sage mb-4">Bienestar Real</h3>
                <p className="text-sage">Tratamientos pensados para cuidar tu cuerpo y reconectar con tu energía.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-sage mb-4">Atención Profesional</h3>
                <p className="text-sage">Más de 15 años de experiencia en técnicas corporales comprobadas.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hand className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-sage mb-4">Cuidado Personalizado</h3>
                <p className="text-sage">Cada sesión se adapta a tus objetivos físicos y emocionales.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-sage mb-6">¿Listo para cuidar tu cuerpo?</h2>
          <p className="text-lg text-sage mb-8 max-w-2xl mx-auto font-light">
          Te esperamos con un espacio dedicado a tu bienestar corporal, donde cada sesión está pensada para ayudarte a sentirte bien, por dentro y por fuera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-8 py-4 rounded-full font-medium"
              onClick={() => window.open('https://wa.me/5491163746069?text=¡Hola!%20Quisiera%20reservar%20una%20sesión%20corporal%20en%20Cuerpo%20y%20Armonia.%20¿Podrían%20confirmarme%20la%20disponibilidad?', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar Sesión
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-8 py-4 font-medium"
              onClick={() => window.open("https://instagram.com/cuerpoyarmonia", "_blank")}
            >
              Ver Testimonios
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-sage text-white p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold">¿Dudas sobre qué tratamiento elegir?</p>
            <p className="text-sm opacity-90 font-light">Consulta gratuita por WhatsApp</p>
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full font-medium"
            onClick={() => window.open('https://wa.me/5491163746069?text=Hola!%20Me%20gustaría%20consultar%20por%20los%20tratamientos%20corporales%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20asesorarme%20para%20elegir%20el%20más%20adecuado%20para%20mí?', '_blank')}
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
