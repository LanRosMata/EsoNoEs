import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { searchCenters } from '../api/centersApi';
import type { Center } from '../api/centersApi';
import SupportCenterList from '../components/SupportCenterList';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [centers, setCenters] = useState<Center[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const results = await searchCenters(query);
        setCenters(results);
      } catch (error) {
        console.error('Error searching centers:', error);
        setCenters([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8"
      >
      <ArrowLeft className="w-5 h-5 mr-2" />
        Volver al inicio
      </Link>

      <h1 className="text-3xl font-bold text-orange-950 mb-6">
        Resultados de búsqueda
      </h1>
      
      <div className="mb-6">
        <p className="text-orange-800">
          Mostrando resultados para: <span className="font-semibold">{query}</span>
        </p>
      </div>

      <SupportCenterList centers={centers} isLoading={isLoading} />

      <div className="text-center mb-6 mt-12">
          <p>Desarrollado por Allan Rosales: arrrmatamoros@gmail.com</p>
      </div>
      
    </main>
  );
};

export default SearchResultsPage;