import Link from "next/link";

export default function Legales() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center px-4 py-12 sm:py-20">
      <div className="max-w-2xl bg-white rounded-3xl shadow-lg p-6 sm:p-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-dark-sage mb-4 sm:mb-6">Aviso Legal y Políticas de Privacidad</h1>
        <p className="text-sage mb-4 text-sm sm:text-base leading-relaxed">
          Bienvenido a Cuerpo y Armonia. El acceso y uso de este sitio web implica la aceptación de los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestro sitio.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-dark-sage mt-4 sm:mt-6 mb-2">Propiedad Intelectual</h2>
        <p className="text-sage mb-4 text-sm sm:text-base leading-relaxed">
          Todos los contenidos, imágenes, textos, logotipos y diseños presentes en este sitio son propiedad exclusiva de Cuerpo y Armonia, salvo que se indique lo contrario. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-dark-sage mt-4 sm:mt-6 mb-2">Protección de Datos Personales</h2>
        <p className="text-sage mb-4 text-sm sm:text-base leading-relaxed">
          Los datos personales que nos proporciones a través de formularios o canales de contacto serán tratados con estricta confidencialidad y conforme a la legislación vigente. Utilizaremos tus datos únicamente para responder tus consultas, gestionar reservas o enviarte información sobre promociones si así lo solicitaste.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-dark-sage mt-4 sm:mt-6 mb-2">Uso de Cookies</h2>
        <p className="text-sage mb-4 text-sm sm:text-base leading-relaxed">
          Este sitio puede utilizar cookies para mejorar la experiencia del usuario. Puedes configurar tu navegador para rechazar las cookies, aunque esto podría afectar el funcionamiento de algunas secciones del sitio.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-dark-sage mt-4 sm:mt-6 mb-2">Enlaces Externos</h2>
        <p className="text-sage mb-4 text-sm sm:text-base leading-relaxed">
          Nuestro sitio puede contener enlaces a sitios web de terceros. No nos responsabilizamos por el contenido ni las políticas de privacidad de dichos sitios.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-dark-sage mt-4 sm:mt-6 mb-2">Modificaciones</h2>
        <p className="text-sage mb-4 text-sm sm:text-base leading-relaxed">
          Nos reservamos el derecho de modificar en cualquier momento el contenido de este aviso legal y las políticas de privacidad. Te recomendamos revisarlas periódicamente.
        </p>
        <Link href="/" className="text-sage underline hover:text-dark-sage text-sm sm:text-base">Volver al inicio</Link>
      </div>
    </div>
  );
} 