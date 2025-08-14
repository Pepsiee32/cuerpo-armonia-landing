"use client"

import { useState, useEffect } from "react"
import { Button } from "./button"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

export function SmoothNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mostrar/ocultar navegación basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 100) // Mostrar después de 100px de scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Altura aproximada del header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      // Cerrar menú móvil después de hacer clic
      setIsMobileMenuOpen(false)
    }
  }

     const navigationItems = [
     { name: "Inicio", id: "hero" },
     { name: "Beneficios", id: "beneficios" },
     { name: "Servicios", id: "servicios" },
     { name: "Testimonios", id: "testimonios" },
     { name: "Nosotros", id: "nosotros" },
     { name: "FAQ", id: "faq" },
     { name: "Contacto", id: "contacto" },
   ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
                     {/* Logo */}
           <div className="flex items-center group">
             <Image 
               src="/logo-no-letter.svg" 
               alt="Cuerpo y Armonia" 
               width={56} 
               height={56} 
               className="transition-transform group-hover:scale-105" 
             />
           </div>

                     {/* Navigation Menu - Desktop */}
           <div className="hidden md:flex items-center space-x-6">
             {navigationItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => scrollToSection(item.id)}
                 className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                   isVisible 
                     ? 'text-dark-sage hover:text-sage' 
                     : 'text-white/90 hover:text-white'
                 }`}
               >
                 {item.name}
               </button>
             ))}
           </div>

           {/* CTA Button and Mobile Menu */}
           <div className="flex items-center space-x-2">
             {/* CTA Button */}
             <Button
               className="bg-sage hover:bg-dark-sage text-white rounded-full text-sm px-4 sm:px-6 py-2 min-h-[40px] transition-all duration-200 hover:scale-105"
               onClick={() => window.open('https://wa.me/5491166108438?text=Hola,%20quiero%20reservar%20un%20turno', '_blank')}
               aria-label="Reservar turno por WhatsApp"
             >
               <MessageCircle className="mr-2 h-4 w-4" />
               <span className="hidden sm:inline">Reservar</span>
               <span className="sm:hidden">Reservar</span>
             </Button>

             {/* Mobile Menu Button */}
             <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className={`md:hidden p-2 rounded-full transition-all duration-200 ${
                 isVisible 
                   ? 'text-dark-sage hover:bg-sage/10' 
                   : 'text-white hover:bg-white/10'
               }`}
               aria-label="Abrir menú de navegación"
             >
               {isMobileMenuOpen ? (
                 <X className="h-6 w-6" />
               ) : (
                 <Menu className="h-6 w-6" />
               )}
             </button>
           </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-sage/20">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 rounded-lg text-dark-sage font-medium hover:bg-sage/10 transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
