import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-4">
      <div>
        <h1 className='text-4xl font-bold flex items-center justify-center ' >EsoNoEs.org</h1>
      </div>
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base">
        <Phone className="w-5 h-5" />
        <span>Emergencias: </span>
        <a href="tel:911" className="font-bold hover:underline">911</a>
        <span className="mx-2">|</span>
        <span>Línea Nacional: </span>
        <a href="tel:800-555-0111" className="font-bold hover:underline">800-555-0111</a>
      </div>
    </div>
  );
};

export default EmergencyBanner;