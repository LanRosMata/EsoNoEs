import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Phone, Shield, MapPin } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { BottonCard } from '../components/BottonCard';

function HomePage() {
  const navigate = useNavigate();
  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8" >
          <div className=" text-center mb-12">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-orange-950 mb-4">
              Encuentra Ayuda y Apoyo
            </h1>
            <p className="text-lg text-orange-800 max-w-2xl mx-auto">
              Estamos aquí para ti. Encuentra centros de apoyo cercanos y recursos confidenciales.
            </p>
          </div>

        <SearchBar onSearch={handleSearch} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <InfoCard
            icon={<MapPin className="w-8 h-8 text-orange-600" />}
            title="Centros Cercanos"
            description="Encuentra centros de apoyo en tu área con servicios especializados."
          />
          <InfoCard
            icon={<Shield className="w-8 h-8 text-orange-600" />}
            title="Apoyo Incondicional"
            description="Si no recibes ayuda adecuada llama a DIDADPAL: 2242-8641 || Poder Judicial: 2240-6000 || Ministerio Público: 2221 3534"
          />
          <InfoCard
            icon={<Phone className="w-8 h-8 text-orange-600" />}
            title="Ayuda 24/7"
            description="Líneas de ayuda disponibles las 24 horas, todos los días: Emergencias 911 || Lina para la Mujer 114"
          />
        </div>
      </main>
      <footer className=" bg-orange-400 w-full mx-auto p-5 mb-24">
        <div className=" text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-950 mb-4 ">
            Próximos Eventos
          </h2>
          <p className="text-lg text-white font-semibold max-w-2xl mx-auto" >
            Unte a nuestos proximos eventos presenciales o virtuales. Conoce más a continuación:
          </p>
          <div className=" w-4/5  mx-auto grid grid-cols-1 content-center  md:grid-cols-2  gap-8 mt-4 ">

                {/* Evento 1 */}
            <div className="bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-950 mb-1">
                Evento Virtual
              </h3>
              <p className="text-orange-800">
               <span className="font-bold" >Fecha:</span> 10 de agosto 2023
              </p>
              <p className="text-orange-800">
               <span className="font-bold" >Hora:</span> 9:00 AM - 10:00 AM
              </p>
              <p className="text-orange-800">
              <span className="font-bold" >Lugar:</span>  Ciudad de Buenos Aires
              </p>
              <p className="text-orange-800">
              <span className="font-bold" >Descripción: </span> Descripción del evento 1
              </p>
              <p className="text-orange-800 font-bold" >Link: <a  href="">ZOOM</a> </p>
              
            </div>
                {/* Evento 2 */}
            <div className="bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-950 mb-1">
                Evento Presencial
              </h3>
              <p className="text-orange-800">
               <span className="font-bold" >Fecha:</span> 10 de agosto 2023
              </p>
              <p className="text-orange-800">
               <span className="font-bold" >Hora:</span> 9:00 AM - 10:00 AM
              </p>
              <p className="text-orange-800">
              <span className="font-bold" >Lugar:</span>  Ciudad de Buenos Aires
              </p>
              <p className="text-orange-800">
              <span className="font-bold" >Descripción: </span> Descripción del evento 2
              </p>
            </div>

          </div>
        </div>

      </footer>
    </>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-orange-900 mb-2 text-center">
        {title}
      </h3>
      <p className="text-orange-800 text-center">
        {description}
      </p>
    </div>
  );
}

export default HomePage;