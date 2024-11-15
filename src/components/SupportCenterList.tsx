import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import type { Center } from '../api/centersApi';

interface SupportCenterListProps {
  centers: Center[];
  isLoading: boolean;
}

const SupportCenterList: React.FC<SupportCenterListProps> = ({ centers, isLoading }) => {
  if (isLoading) {
    return (
      <div className="text-center text-orange-800 mt-8">
        Buscando centros...
      </div>
    );
  }

  if (centers.length === 0) {
    return (
      <div className="text-center text-orange-800 mt-8">
        No se encontraron centros. Intenta con otra ciudad.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {centers.map(center => (
        <div key={center.id} className="bg-orange-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-orange-100">
          <div className="p-6">
            <h3 className="text-3xl font-extrabold text-orange-900 mb-3">
              {center.name}
            </h3>
            <p className="mb-4" > <span className="font-semibold" >Dirección:</span> {center.address}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-orange-800">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span>{center.city}</span>
              </div>
              <div className="flex items-center gap-2 text-orange-800">
                <Phone className="w-5 h-5 text-orange-600" />
                <span>{center.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-orange-800">
                <Clock className="w-5 h-5 text-orange-600" />
                <span>{center.hours}</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-orange-900 mb-2">Servicios:</h4>
              <div className="flex flex-wrap gap-2">
                {center.services.map(service => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm border border-orange-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportCenterList;