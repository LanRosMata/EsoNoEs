import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const DenunciaPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 text">
      <Link 
        to="/" 
        className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8"
      >
      <ArrowLeft className="w-5 h-5 mr-2" />
        Volver al inicio
      </Link>
      <h1 className="text-6xl font-bold text-orange-950 mb-4 text-center" >¿Cómo Denunciar?</h1>
      <section className=" mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" >

        <PasosCard 
          numero={1}
          titulo="Buscan un Centro de Apoyo"
          description="Puedes realizar tu denuncia en la posta policial más cercana, en los juzgados de paz, alcaldías y otras organizaciones. Busca aquí el lugar más cercano."
          botonTxt="Buscar"
        /> 

        <PasosCard 
          numero={2}
          titulo="No te olvides de ti"
          description="Antes de hacer tu denuncia, recuerda llevar contigo una identificación tuya. Puede ser un DNI, partida de nacimiento, licencia de conducir o pasaporte. Es importante que lleves muy clara la dirección de tú residencial. "
        /> 

        <PasosCard 
          numero={3}
          titulo="Ideas Claras"
          description="Respira profundo, Ceunta que te paso, no omitas ningún detalle. Lleva el nombre de tu agresor o agresores y si tienes alguna prueba física o exámenes médicos, no olvides presentarlos. Presenta con exactitud el lugar donde ocurrieron los hechos y si existe algún testigo."
          botonTxt="Buscar"
        /> 

        <PasosCard 
          numero={4}
          titulo="No se acaba hasta que se acaba"
          description="Recopila toda la documentación e información posible de tu denuncia. Lleva un seguimiento de tu denuncia."
          botonTxt="Buscar"
        /> 

        <PasosCard 
          numero={5}
          titulo="Que no te callen"
          description="Si sientes que no te brindaron la ayuda que necesitabas o hicieron de menos tu denuncia, también puedes denunciar, nadie te puede callar. Denuncia a DIDADPAL: 2242-8641 || Poder Judicial: 2240-6000 || Ministerio Público: 2221 3534"
        /> 


        
      </section>
    </main>
  );
};


interface PasosCardProps {
  numero: number;
  titulo: string;
  description: string;
  botonTxt?: string;
}

function PasosCard({ numero, titulo, description,botonTxt = "" }: PasosCardProps) {
  return (
    <article className="relative bg-orange-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100">
          <div className="flex items-center  gap-4" >
            <p className="w-12 h-20 shadow-md text-8xl bg-orange-800 px-2 py-1 ml-5 rounded text-white m-2 font-extrabold hover:bg-orange-600" >{numero}</p> 
            <div>
              <h3 className="text-4xl font-bold text-orange-900 mb-3" >
                {titulo}</h3>
              <p className="text-lg font-semibold" > {description}</p>
            </div>
            <BotonPasosCard nombre={botonTxt} />
          </div>
        </article>

)}


interface BotonPasosProps {
  nombre: string;
}

function BotonPasosCard({ nombre } : BotonPasosProps) {
  if (nombre == "") return
  const navigate = useNavigate();
  const handleQuickExit = () => {
    navigate(`/`);
  };

  return (
    <div className="absolute -bottom-5 right-8">
              <button
                  onClick={handleQuickExit}
                  className=" bottom-6 right-6 bg-orange-600 hover:bg-orange-700 
                      text-white font-semibold py-2 px-4 rounded mt-8">
                  {nombre}
              </button>
            </div>
  )
}

export default DenunciaPage;

//https://lucide.dev/icons/messages-square