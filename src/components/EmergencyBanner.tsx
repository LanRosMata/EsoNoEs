import React from 'react';
import { Phone, MessageCircleMore } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-4">
      <div>
        <h1 className='text-4xl font-bold flex items-center justify-center ' >EsoNoEs.org</h1>
      </div>
      <div className="container mt-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-base ">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 " />
          <span>Emergencias:</span>
          <a href="tel:911" className="font-bold hover:underline">911</a>
          <span className="mx-2">|</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircleMore className="w-5 h-5" />
          <span>WhatsApp:</span>
          <a href="whatsapp:+5049999-9999" className="font-bold hover:underline">9999-9999</a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;