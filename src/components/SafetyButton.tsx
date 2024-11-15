import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const SafetyButton: React.FC = () => {
  const navigate = useNavigate();
  const handleQuickExit = () => {
    navigate(`/como-denunciar`);
  };

  return (
    <button
      onClick={handleQuickExit}
      className="fixed text-xl bottom-6 right-6 bg-orange-600 hover:bg-orange-700 
                 text-white px-6 py-3 rounded-full shadow-lg 
                 flex items-center gap-2 transition-colors duration-300
                 border-2 border-orange-400"
    >
      {/* <X className="w-5 h-5" /> */}
      <span>¿Como denunciar?</span>
    </button>
  );
};

export default SafetyButton;