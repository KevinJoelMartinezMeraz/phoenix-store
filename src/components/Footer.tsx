import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-sm mr-4 hover:underline">Términos y Condiciones</a>
          <a href="#" className="text-sm hover:underline">Políticas</a>
        </div>
        <button className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contáctanos
        </button>
      </div>
    </footer>
  );
};

export default Footer;