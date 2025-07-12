"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  User,
  Heart,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const testimonials = [
    {
      name: "María González",
      text: "Increíble experiencia. El personal es muy profesional y los tratamientos son de primera calidad. Me siento renovada después de cada visita.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      text: "15 años de experiencia se notan en cada detalle. Los tratamientos faciales son excepcionales y el ambiente es muy relajante.",
      rating: 5,
    },
    {
      name: "Carmen López",
      text: "El mejor centro de belleza de la zona. Tecnología avanzada y un trato personalizado que marca la diferencia.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "¿Necesito reservar cita previa?",
      answer:
        "Sí, recomendamos reservar cita previa para garantizar la disponibilidad del tratamiento deseado y brindarle la mejor atención personalizada.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias. También ofrecemos planes de financiación para tratamientos extensos.",
    },
    {
      question: "¿Los productos que utilizan son seguros?",
      answer:
        "Utilizamos únicamente productos de marcas reconocidas internacionalmente, todos dermatológicamente testados y aprobados por organismos sanitarios.",
    },
    {
      question: "¿Ofrecen consultas gratuitas?",
      answer:
        "Sí, ofrecemos una consulta inicial gratuita donde evaluamos sus necesidades y recomendamos el tratamiento más adecuado para usted.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Spa relajante"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-dark-sage/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-dark-sage mb-4 tracking-tight">Cuerpo y Armonía</h1>
            <p className="text-xl md:text-2xl text-sage font-medium mb-8">15 años cuidando tu bienestar</p>
          </div>

          <Button
            size="lg"
            className="bg-sage hover:bg-dark-sage text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Reservar Cita
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-sage mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto">
              Descubre los beneficios que nos hacen únicos en el cuidado de tu belleza y bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <Sparkles className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Tecnología Avanzada</h3>
                <p className="text-sage">Equipos de última generación para tratamientos efectivos y seguros</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <User className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Tratamientos Personalizados</h3>
                <p className="text-sage">Cada tratamiento se adapta a tus necesidades específicas y tipo de piel</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Bienestar Integral</h3>
                <p className="text-sage">Enfoque holístico que cuida tu belleza exterior e interior</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Sobre Nosotros</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-sage mb-6">
                15 años de experiencia en belleza y bienestar
              </h2>
              <p className="text-lg text-sage mb-6 leading-relaxed">
                En Cuerpo y Armonía creemos que la verdadera belleza nace del equilibrio entre cuerpo, mente y espíritu.
                Durante más de una década, hemos sido el refugio de bienestar para cientos de personas que buscan cuidar
                su imagen y renovar su energía.
              </p>
              <p className="text-lg text-sage mb-8 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados utiliza las técnicas más avanzadas y productos de
                primera calidad para ofrecerte resultados excepcionales en un ambiente de total relajación y confort.
              </p>
              <Button className="bg-sage hover:bg-dark-sage text-white rounded-full px-8 py-3">
                Conoce más sobre nosotros
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Centro de belleza"
                  width={500}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Nuestros Servicios</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-sage mb-4">Tratamientos destacados</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto">
              Descubre nuestra selección de tratamientos más populares, diseñados para realzar tu belleza natural
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Tratamientos faciales"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-sage mb-3">Tratamientos Faciales</h3>
                <p className="text-sage mb-4">
                  Limpieza profunda, hidratación y rejuvenecimiento para todo tipo de piel
                </p>
                <Button
                  variant="outline"
                  className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Tratamientos corporales"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-sage mb-3">Tratamientos Corporales</h3>
                <p className="text-sage mb-4">
                  Masajes relajantes, exfoliación y tratamientos reductivos para tu cuerpo
                </p>
                <Button
                  variant="outline"
                  className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Cuidado de uñas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-sage mb-3">Cuidado de Uñas</h3>
                <p className="text-sage mb-4">Manicura, pedicura y nail art con productos de alta calidad</p>
                <Button
                  variant="outline"
                  className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Testimonios</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-sage mb-4">Lo que dicen nuestros clientes</h2>
          </div>

          <div className="relative">
            <Card className="bg-white border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Sparkles key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-sage mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-xl font-bold text-dark-sage">{testimonials[currentTestimonial].name}</h4>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full border-sage text-sage hover:bg-sage hover:text-white bg-transparent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full border-sage text-sage hover:bg-sage hover:text-white bg-transparent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-sage" : "bg-sage/30"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-sage mb-4">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-sage/5 transition-colors duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-dark-sage pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-sage flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-sage flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-sage leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Contacto</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-sage mb-4">Visítanos o contáctanos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">WhatsApp</h3>
                <p className="text-sage mb-4">Reserva tu cita por WhatsApp</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">+54 11 1234-5678</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Instagram className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Instagram</h3>
                <p className="text-sage mb-4">Síguenos en redes sociales</p>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full">@cuerpoyarmonia</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-dark-sage mb-4">Dirección</h3>
                <p className="text-sage mb-4">
                  Av. Corrientes 1234
                  <br />
                  Buenos Aires, Argentina
                </p>
                <Button
                  variant="outline"
                  className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent"
                >
                  Ver en mapa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-sage text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Cuerpo y Armonía</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Tu centro de belleza y bienestar de confianza. 15 años cuidando tu imagen y renovando tu energía con los
                mejores tratamientos y tecnología avanzada.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-white/80">
                <li>Tratamientos Faciales</li>
                <li>Tratamientos Corporales</li>
                <li>Cuidado de Uñas</li>
                <li>Masajes Relajantes</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +54 11 1234-5678
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Av. Corrientes 1234
                </li>
                <li className="flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  @cuerpoyarmonia
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Cuerpo y Armonía. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Contact Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-sage text-white p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold">¿Listo para cuidar tu bienestar?</p>
            <p className="text-sm opacity-90">Reserva tu cita ahora</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage rounded-full bg-transparent"
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
