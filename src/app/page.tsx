import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/Hero";

export default async function Home() {
  
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title=" El Software de gestion para los emprendedores"
        subtitle="Cigarra.Net una herramienta en la nube que permite la gestion de tu negocio donde y cuando quieras."
        storeButtonText="Iniciar sesión"
        storeButtonLink="/tienda"
        aboutButtonText="Conocenos"
        aboutButtonLink="/sobre-nosotros"
        backgroundImage="/hero.webp"
      />
      

      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-violet-500 p-8">TU NEGOCIO A UN CLICK DE DISTANCIA</h2>
        <div className="w-[600px] text-center mb-4">
        <h3 className="text-4xl font-bold">Mira el estado de tu negocio en cualquier momento</h3>
        </div>
        <div className="w-[800px] text-center p-1">
            <p className="text-gray-500">¿Qué te parecería cambiar horas de trabajo por un simple clic? 
              Cigarra.Net simplifica la gestión de tu negocio, automatizando tareas y agilizando todos tus procesos.</p>
        </div>
        <div className="grid grid-cols-5 gap-4 p-8 items-center">
          <div className="col-span-3">
            <img src="/Hero1.jpg" alt="imagen prueba" className="w-[70%] ml-28 mt-4" />
          
        </div>
        <div className="col-span-2 gap-[70%]">
          <h3 className="text-2xl font-bold mb-4">Cigarra.Net se ocupa del inventario</h3>
          <h4 className="text-lg font-bold mb-4 ">Documentos con una imagen profesional</h4>
          <p className="text-gray-500 mb-4">Documentos editables que permiten la comunicación entre empleados y dueño con mensajes</p>
          <h4 className="text-lg font-bold mb-4 ">Envío de alertas para tus inventarios</h4>
          <p className="text-gray-500 mb-4">Crea tus propias alertas que haran saber cuando un producto estara agregado</p>
          <Button className="bg-violet-500">Aprende</Button>
        </div>
      </div>
      </div>


      
    </div>
  );
}
