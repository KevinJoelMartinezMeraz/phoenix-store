import React from 'react';

const Home: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1588401273872-959d2076283a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  ];

  return (
    <div>
      <div className="relative h-screen">
        <img src={images[0]} alt="Bote de seguridad" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Bienvenidos a Botes Seguros S.A.</h1>
            <p className="text-2xl text-white">Seguridad y Confianza en el Agua</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Quiénes Somos</h2>
          <p className="text-lg">
            Somos una empresa líder en la fabricación y venta de botes de seguridad, comprometidos con la calidad y la innovación en el sector náutico.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Nuestra Misión</h2>
          <p className="text-lg">
            Proporcionar a nuestros clientes los botes de seguridad más confiables y avanzados del mercado, garantizando su tranquilidad y seguridad en el agua.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Nuestra Visión</h2>
          <p className="text-lg">
            Ser reconocidos globalmente como la marca de referencia en botes de seguridad, liderando la industria en innovación, calidad y servicio al cliente.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Nuestros Clientes</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Guardacostas Nacionales</li>
            <li>Marinas Deportivas</li>
            <li>Compañías de Cruceros</li>
            <li>Escuelas de Navegación</li>
            <li>Particulares Apasionados por la Náutica</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;