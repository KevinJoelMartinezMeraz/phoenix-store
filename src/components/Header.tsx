import React from 'react';
import { Link } from 'react-router-dom';
import { Ship } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-transparent text-white p-4 absolute w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Ship className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Botes Seguros S.A.</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/productos" className="hover:text-primary transition-colors">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/sobre-nosotros" className="hover:text-primary transition-colors">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;