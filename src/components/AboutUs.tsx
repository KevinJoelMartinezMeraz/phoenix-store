import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-8 mt-16">
      <h2 className="text-3xl font-bold mb-6 text-primary">Sobre Nosotros</h2>
      <p className="text-lg mb-4">
        Botes Seguros S.A. es una empresa líder en la fabricación y venta de botes de seguridad.
        Nos dedicamos a proporcionar soluciones de alta calidad para garantizar la seguridad en el agua.
      </p>
      <p className="text-lg mb-4">
        Con años de experiencia en la industria, nuestro equipo de expertos se esfuerza por ofrecer
        productos innovadores y confiables que cumplen con los más altos estándares de seguridad.
      </p>
      <p className="text-lg">
        Nuestra misión es ser reconocidos globalmente como la marca de referencia en botes de seguridad,
        liderando la industria en innovación, calidad y servicio al cliente.
      </p>
    </div>
  );
};

export default AboutUs;