import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Busca tu ciudad para encontrar centros cercanos..."
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-orange-300 
                     focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
                     outline-none transition-all pl-14 bg-white text-orange-950
                     placeholder:text-orange-300"
          />
          <Search className="w-6 h-6 text-orange-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
        <p className="text-sm text-orange-700 mt-2 text-center">
          Ejemplo: "Tegucigalpa" o "La Ceiba"
        </p>
      </form>
    </div>
  );
};

export default SearchBar;