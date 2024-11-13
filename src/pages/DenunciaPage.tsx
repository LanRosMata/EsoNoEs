import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


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
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" >

        <article className="bg-orange-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100">
          <div className="flex items-center  gap-4" >
            <p className="w-14 h-24 text-6xl bg-orange-800 px-2 py-1 ml-5 rounded text-white m-2 font-bold" >1</p> 
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-3" >
                Buscan un centro de apoyo</h3>
              <p> Buscan un centro de apoyo cercano</p>
              <button
                  className="bottom-6 right-6 bg-orange-600 hover:bg-orange-700 
                      text-white font-semibold py-2 px-4 rounded mt-8">
                  Ir a buscar
              </button>
            </div>
          </div>
        </article>
        
      </section>
    </main>
  );
};

export default DenunciaPage;

//https://lucide.dev/icons/messages-square