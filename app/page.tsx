"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Heart,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Hand,ShieldCheck
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sección de suscripción a promos
import { useState as useStateSuscripcion } from "react";

function SuscripcionPromos() {
  const [email, setEmail] = useStateSuscripcion("");
  const [status, setStatus] = useStateSuscripcion<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar a Formspree
    const res = await fetch("https://formspree.io/f/xyzpybob", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 relative bg-[url('/suscr.webp')] bg-cover bg-[center_top_30%] bg-no-repeat">
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="max-w-xl mx-auto text-center relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 px-2">¡Suscribite para recibir promos exclusivas!</h2>
        <p className="text-white/90 mb-6 text-sm sm:text-base px-2">Dejanos tu email y sé el primero en enterarte de nuestras promociones y novedades.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center px-2">
          <input
            type="email"
            required
            placeholder="Tu email"
            className="rounded-full px-4 py-3 sm:py-2 border border-sage focus:outline-none focus:ring-2 focus:ring-sage text-sm sm:text-base"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-sage hover:bg-dark-sage text-white rounded-full px-6 py-3 sm:py-2 font-semibold transition text-sm sm:text-base"
          >
            Suscribirme
          </button>
        </form>
        {status === "success" && <p className="text-green-300 mt-3 text-sm">¡Gracias por suscribirte!</p>}
        {status === "error" && <p className="text-red-200 mt-3 text-sm">Por favor, ingresá un email válido.</p>}
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const testimonials = [
    {
      name: "María",
      text: "Increíble experiencia. El personal es muy profesional y los tratamientos son de primera calidad. Me siento renovada después de cada visita.",
      rating: 5,
    },
    {
      name: "Julieta",
      text: "Sentís la diferencia desde que entrás. Me asesoraron con paciencia y elegimos el tratamiento ideal para mi piel. Volvería mil veces.",
      rating: 5,
    },
    {
      name: "Maria Laura",
      text: "Me regalaron una tarde de spa. Excelente atención, ambiente cálido y relajante. Super recomendable! Ya tengo turno para volver.",
      rating: 5,
    }    
  ]

  const faqs = [
    {
      question: "¿Necesito reservar un turno previamente?",
      answer:
        "Sí, recomendamos reservar un turno previamente para garantizar la disponibilidad del tratamiento deseado y brindarle la mejor atención personalizada.",
    },
    {
      question: "¿Cómo saco un turno?",
      answer:
        "Podés contactarnos por WhatsApp o Instagram y coordinar tu cita. Te respondemos lo antes posible para brindarte un horario disponible.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos efectivo, tarjetas de débito y transferencias bancarias. También contamos con promociones y Gift Cards.",
    },
    {
      question: "¿Qué tipo de tratamientos ofrecen?",
      answer:
        "Contamos con tratamientos faciales, corporales, masajes, depilación láser y más. Siempre personalizados según tus necesidades.",
    },
    {
      question: "¿Los productos que utilizan son seguros?",
      answer:
      "Absolutamente. Solo trabajamos con marcas reconocidas y productos dermatológicamente testeados, aprobados por organismos sanitarios. Tu seguridad y bienestar son nuestra prioridad.",
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

  // Cambio automático de testimonios cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Cambia el tiempo si quieres más o menos segundos
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/optimized/principal-optimized.webp"
            alt="Spa relajante"
            fill
            sizes="100vw"
            priority
            quality={85}
            className="object-cover object-[center_57%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-dark-sage/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-52 sm:-mt-60 md:-mt-80">
          <div className="mb-4 animate-fade-in">
            <div className="-mb-2 sm:-mb-1 md:mb-0">
              <Image
                src="/logo-web.svg"
                alt="Cuerpo y Armonia Logo"
                width={400}
                height={400}
                className="mx-auto w-48 sm:w-80 md:w-96 lg:w-[500px] mt-28 sm:mt-4 h-64 sm:h-80 md:h-96 lg:h-[500px] object-contain object-center"
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 px-2">
               Cuerpo y Armonia
               <br />
               Estética Integral 
            </h1>
            <p style={{ color: "#fff9f3" }} className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 px-2">"Renová tu esencia"</p>
            <p style={{ color: "#fff9f3" }} className="text-base sm:text-lg md:text-xl font-light mb-6 sm:mb-8 px-2 leading-relaxed">Hace más de 15 años te acompañamos a descubrir tu mejor versión, con cuidado profesional, atención cercana y un espacio de cuidado y renovación.</p>
            <p style={{ color: "#fff9f3" }} className="text-base sm:text-lg md:text-xl font-light mb-6 sm:mb-8 px-2">Tratamientos para tu cuerpo, mente y esencia.</p>
          </div>

          <Button
            size="lg"
            className="bg-sage hover:bg-dark-sage text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium mb-10"
            onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Reservar Turno
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-sage mb-4 px-2">¿Por qué elegirnos?</h2>
            <p className="text-base sm:text-lg text-sage max-w-2xl mx-auto px-2">
              Descubre los beneficios que nos hacen únicos en el cuidado de tu belleza y bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Cuidado Profesional</h3>
                <p className="text-sage text-sm sm:text-base">Cada detalle de nuestros tratamientos está pensado para brindarte seguridad, efectividad y una experiencia reconfortante</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <Hand className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Tratamientos Personalizados</h3>
                <p className="text-sage text-sm sm:text-base">Cada tratamiento se adapta a tus necesidades específicas y tipo de piel</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Bienestar Integral</h3>
                <p className="text-sage text-sm sm:text-base">Equilibrio entre belleza exterior y salud interior para una transformación completa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="bg-white/90 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
                <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Sobre Nosotros</Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-sage mb-4 sm:mb-6">
                  15 años de experiencia en belleza y bienestar
                </h2>
                <p className="text-base sm:text-lg text-sage mb-4 sm:mb-6 leading-relaxed">
                  En Cuerpo y Armonia creemos que la verdadera belleza nace del equilibrio entre cuerpo, mente y espíritu.
                  Durante más de una década, hemos sido el refugio de bienestar para cientos de personas que buscan cuidar
                  su imagen y renovar su energía.
                </p>
                <p className="text-base sm:text-lg text-sage mb-6 sm:mb-8 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados aplica técnicas efectivas y productos de calidad, brindando resultados reales en un ambiente de total relajación y confort.
                </p>
                <Button className="bg-sage hover:bg-dark-sage text-white rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno%20en%20Cuerpo%20y%20Armonia.%20¿Podés%20decirme%20qué%20días%20y%20horarios%20hay%20disponibles?', '_blank')}
                >
                  Viví la experiencia Cuerpo y Armonia
                </Button>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-64 sm:h-80 md:h-96 z-0">
              <Image
                src="/optimized/hero-optimized.webp"
                alt="Centro de belleza"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">Nuestros Servicios</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-sage mb-4 px-2">Tratamientos destacados</h2>
            <p className="text-base sm:text-lg text-sage max-w-2xl mx-auto px-2">
              Descubre nuestra selección de tratamientos más populares, diseñados para realzar tu belleza natural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src = "/optimized/fac.webp"
                  alt="Tratamientos faciales"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-2 sm:mb-3">Tratamientos Faciales</h3>
                <p className="text-sage mb-4 text-sm sm:text-base">
                  Limpieza profunda, hidratación y rejuvenecimiento para todo tipo de piel
                </p>
                <Link 
                  href="/tratamientos/tratamientos-faciales" 
                  className="inline-flex items-center justify-center border border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent w-full text-sm sm:text-base min-h-[44px] py-3 px-4 transition-colors duration-200 font-medium"
                >
                  Explorá nuestros faciales
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/optimized/corporal-optimized.webp"
                  alt="Tratamientos corporales"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-2 sm:mb-3">Tratamientos Corporales</h3>
                <p className="text-sage mb-4 text-sm sm:text-base">
                  Masajes relajantes, exfoliación y tratamientos reductivos para tu cuerpo
                </p>
                <Link 
                  href="/tratamientos/tratamientos-corporales" 
                  className="inline-flex items-center justify-center border border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent w-full text-sm sm:text-base min-h-[44px] py-3 px-4 transition-colors duration-200 font-medium"
                >
                  Conocé las opciones corporales
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/optimized/manicura-optimized.webp"
                  alt="Belleza de Mano, Ceja y Pestaña"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  className="object-cover object-[center_65%] group-hover:cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-2 sm:mb-3">Belleza Mano, Ceja y Pestaña</h3>
                <p className="text-sage mb-4 text-sm sm:text-base">Cuidado de manos, perfilado y lifting de pestañas para realzar tu mirada y lucir un estilo cuidado al detalle.</p>
                <Link 
                  href="/tratamientos/belleza" 
                  className="inline-flex items-center justify-center border border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent w-full text-sm sm:text-base min-h-[44px] py-3 px-4 transition-colors duration-200 font-medium"
                >
                  Realzá tu mirada y mano
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-sage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-cream text-dark-sage border-cream/20 mb-4">Testimonios</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4 px-2">Lo que dicen nuestros clientes</h2>
          </div>

          <div className="relative">
            <Card className="bg-white border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-sage mb-4 sm:mb-6 italic leading-relaxed px-2">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage">{testimonials[currentTestimonial].name}</h3>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 rounded-full border-sage text-sage bg-transparent hover:bg-sage hover:text-white focus:bg-transparent active:bg-transparent focus:hover:bg-sage focus:hover:text-white active:hover:bg-sage active:hover:text-white w-12 h-12 sm:w-14 sm:h-14"
              onClick={prevTestimonial}
              aria-label="Ver testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 rounded-full border-sage text-sage bg-transparent hover:bg-sage hover:text-white focus:bg-transparent active:bg-transparent focus:hover:bg-sage focus:hover:text-white active:hover:bg-sage active:hover:text-white w-12 h-12 sm:w-14 sm:h-14"
              onClick={nextTestimonial}
              aria-label="Ver testimonio siguiente"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full transition-colors duration-300 flex items-center justify-center ${
                  index === currentTestimonial ? "bg-sage" : "bg-sage/30"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Ir al testimonio ${index + 1} de ${testimonials.length}`}
                aria-current={index === currentTestimonial ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">FAQ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-sage mb-4 px-2">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 sm:p-8 text-left flex justify-between items-center hover:bg-sage/5 transition-colors duration-300 min-h-[44px]"
                    onClick={() => toggleFaq(index)}
                    aria-label={`${openFaq === index ? 'Ocultar' : 'Mostrar'} respuesta: ${faq.question}`}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-dark-sage pr-4 leading-tight">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-sage flex-shrink-0" />
                    ) : (
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-sage flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div id={`faq-answer-${index}`} className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sage leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suscripción a Promos */}
      <SuscripcionPromos />

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-sage">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-cream text-dark-sage border-cream/20 mb-4">Contacto</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4 px-2">Visítanos o contáctanos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">WhatsApp</h3>
                <p className="text-sage mb-4 text-sm sm:text-base">Reserva tu turno por WhatsApp</p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno%20en%20Cuerpo%20y%20Armonia.%20¿Podés%20decirme%20qué%20días%20y%20horarios%20hay%20disponibles?', '_blank')}
                >
                  Consultá disponibilidad
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Instagram</h3>
                <p className="text-sage mb-4 text-sm sm:text-base">Síguenos en redes sociales</p>
                <Button 
                  className="bg-pink-600 hover:bg-pink-700 text-white rounded-full w-full text-sm sm:text-base"
                  onClick={() => window.open('https://instagram.com/cuerpoyarmonia', '_blank')}
                >
                  @cuerpoyarmonia
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-sage mb-3 sm:mb-4">Dirección</h3>
                <p className="text-sage mb-4 text-sm sm:text-base">
                Manuela Pedraza 2457
                  <br />
                  Núñez, Buenos Aires, Argentina
                </p>
                <Button
                  variant="outline"
                  className="border-sage text-sage hover:bg-sage hover:text-white rounded-full bg-transparent w-full text-sm sm:text-base"
                  onClick={() => window.open('https://maps.app.goo.gl/hQaacYCMPmrN6aJw9', '_blank')}
                >
                  Encontranos en Núñez
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-dark-sage text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Cuerpo y Armonia</h2>
              <p className="text-white/80 mb-4 leading-relaxed text-sm sm:text-base">
                Tu centro de belleza y bienestar de confianza. 15 años cuidando tu imagen, potenciando tu esencia y brindando resultados reales en un entorno de armonía y calidez.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Servicios</h3>
              <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                <li>
                  <Link href="/tratamientos/tratamientos-faciales" className="hover:underline">Tratamientos Faciales</Link>
                </li>
                <li>
                  <Link href="/tratamientos/tratamientos-corporales" className="hover:underline">Tratamientos Corporales</Link>
                </li>
                <li>
                  <Link href="/tratamientos/belleza" className="hover:underline">Belleza de Manos, Cejas y Pestañas</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contacto</h3>
              <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                <li className="flex items-center">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  +54 11 6374-6069
                </li>
                <li className="flex items-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  Manuela Pedraza 2457
                </li>
                <li className="flex items-center">
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  @cuerpoyarmonia
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/60 text-xs sm:text-sm pb-6 sm:pb-0">
            <p>
              &copy; 2025 Cuerpo y Armonia. Todos los derechos reservados. |
              <Link href="/legales" className="underline hover:text-white ml-1">Legales</Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-sage text-white p-3 sm:p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-sm sm:text-base">¿Listo para cuidar tu bienestar?</p>
            <p className="text-xs sm:text-sm opacity-90">Reserva tu turno ahora</p>
          </div>
          <div className="flex gap-3">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white rounded-full text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/5491163746069?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
            >
              <MessageCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div className="h-16 w-full bg-dark-sage"></div>
    </div>
  )
}
