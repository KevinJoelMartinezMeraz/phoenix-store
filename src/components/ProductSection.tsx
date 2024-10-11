import React from 'react';
import { Sailboat } from 'lucide-react';

const ProductSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 mt-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
              <Sailboat className="w-20 h-20 text-secondary mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-primary">Bote de Seguridad Modelo {item}</h3>
              <p className="text-gray-600 text-center mb-6">
                Descripción breve del bote de seguridad y sus características principales.
              </p>
              <button className="bg-secondary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;