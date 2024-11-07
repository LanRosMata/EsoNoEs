import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Phone, Shield, MapPin } from 'lucide-react';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const navigate = useNavigate();
  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
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
          icon={<Shield className="w-8 h-8 text-orange-600" />}
          title="Apoyo Confidencial"
          description="Todos nuestros servicios son completamente confidenciales y seguros."
        />
        <InfoCard
          icon={<MapPin className="w-8 h-8 text-orange-600" />}
          title="Centros Cercanos"
          description="Encuentra centros de apoyo en tu área con servicios especializados."
        />
        <InfoCard
          icon={<Phone className="w-8 h-8 text-orange-600" />}
          title="Ayuda 24/7"
          description="Líneas de ayuda disponibles las 24 horas, todos los días."
        />
      </div>
    </main>
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