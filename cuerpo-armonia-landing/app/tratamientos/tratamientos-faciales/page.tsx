"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sparkles, Clock, Star, MessageCircle, CheckCircle, Droplets, Sun, Zap, Heart, ScanFace, Flame, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TratamientosFaciales() {
    const treatments = [
        {
        name: "Limpieza Facial Profunda",
        description: "Eliminación de impurezas con punta de diamante, extracciones y una hidratación descongestiva.",
        price: "$29.000",
        duration: "90 min",
        benefits: [
          "Renovación y limpieza profunda",
          "Reducción de impurezas y puntos negros",
          "Piel más fresca y luminosa",
          "Hidratación calmante post-extracción"
        ],
        icon: ScanFace,
        image: "/faci.webp?height=300&width=400",
        },
        {
          name: "Dermaplaning + Limpieza",
          description: "Eliminación de células muertas y vello facial con bisturí dermatológico, combinada con limpieza profunda.",
          price: "$35.000",
          duration: "",
          benefits: [
            "Piel ultra suave y uniforme",
            "Mayor luminosidad inmediata",
            "Mejor absorción de productos",
            "Acabado sin vello facial"
          ],
          icon: Layers,
          image: "/dermaplan2.jpg?height=300&width=400",
        },             
        {
          name: "Crioradiofrecuencia Facial",
          description: "Tratamiento facial con tecnología avanzada para rejuvenecer y reafirmar la piel.",
          price: "$14.000",
          benefits: [
            "Reafirma la piel",
            "Reduce arrugas",
            "Mejora textura",
            "Estimula colágeno"
          ],
          icon: Sparkles,
          image: "/crio-facial.png?height=300&width=400",
          zones: ["Rostro", "Cuello", "Escote"]
        },
        {
          name: "Microneedling Personalizado",
          description: "Aplicación de activos como hialurónico, resveratrol, exosomas, hilos tensores o botox mediante micropunción.",
          price: "$39.000",
          duration: "60 min",
          benefits: [
            "Mejora firmeza y textura de la piel",
            "Atenúa líneas finas",
            "Estimula la regeneración celular",
            "Potencia absorción de principios activos"
          ],
          icon: Droplets,
          image: "/need2.jpg?height=300&width=400",
        }, 
        {
          name: "Peeling Químico (Green o Gold Peel)",
          description: "Exfoliación profunda con peelings químicos adaptados al tipo de piel: renovación con activos naturales.",
          price: "$40.000",
          duration: "",
          benefits: [
            "Renovación celular intensa",
            "Piel más suave y luminosa",
            "Unificación del tono y textura",
            "Activos adaptados: Green o Gold Peel"
          ],
          icon: Flame,
          image: "/gold2.webp?height=300&width=400",
        }
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
          <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Tratamientos Faciales</Badge>
          <h1 className="text-4xl md:text-6xl font-semibold text-dark-sage mb-6">Cuidado Facial Profesional</h1>
          <p className="text-xl text-sage max-w-3xl mx-auto mb-8 font-light">
          Descubrí nuestra amplia gama de tratamientos faciales diseñados para todo tipo de piel. Desde limpiezas profundas hasta cuidados anti-edad, combinamos técnicas efectivas y productos de calidad para lograr resultados visibles y duraderos.
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
              Ver Promociones
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section id="paquetes-especiales" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-sage mb-4">Nuestros Tratamientos Faciales</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto font-light">
            Cada sesión está diseñada para cuidar tu piel, mejorar su apariencia y brindarte un momento de bienestar único.
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
                          <span className="font-semibold text-sage">Zonas incluidas: </span>
                          <span className="text-sage">{treatment.zones.join(", ")}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-dark-sage">{treatment.price}</span>
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
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-cream mb-4">
              ¿Por qué elegir nuestros tratamientos faciales?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ScanFace className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-sage mb-4">Enfoque Personalizado</h3>
                <p className="text-sage">Adaptamos cada tratamiento a tu tipo de piel y objetivos estéticos, asegurando una experiencia única.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-sage mb-4">Profesionales Certificados</h3>
                <p className="text-sage">Nuestro equipo tiene más de 15 años de experiencia y formación constante en estética facial.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-sage mb-4">Productos de Calidad</h3>
                <p className="text-sage">Trabajamos con productos de alta calidad, seleccionados por su eficacia y cuidado para la piel.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-sage mb-6">¿Lista para transformar tu piel?</h2>
          <p className="text-lg text-sage mb-8 max-w-2xl mx-auto font-light">
          Agendá tu consulta y encontrá el tratamiento facial ideal para vos. Nuestro equipo te asesorará de forma personalizada para lograr resultados reales y duraderos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sage hover:bg-dark-sage text-white px-8 py-4 rounded-full font-medium"
              onClick={() => window.open('https://wa.me/5491163746069?text=Hola!%20Me%20gustaría%20consultar%20por%20los%20tratamientos%20faciales%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20asesorarme%20para%20encontrar%20el%20más%20adecuado%20para%20mi%20piel?', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent px-8 py-4 font-medium"
              onClick={() => window.open("https://instagram.com/cuerpoyarmonia", "_blank")}
            >
              Ver Resultados en Instagram
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
            onClick={() => window.open('https://wa.me/5491163746069?text=Hola!%20Me%20gustaría%20consultar%20por%20los%20tratamientos%20faciales%20de%20Cuerpo%20y%20Armonia.%20¿Podrían%20asesorarme%20para%20encontrar%20el%20más%20adecuado%20para%20mi%20piel?', '_blank')}
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
