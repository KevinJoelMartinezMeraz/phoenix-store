import React from 'react';

type Tab = 'inicio' | 'productos' | 'sobre-nosotros';

interface TabNavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
  ];

  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab.id} className="mr-1">
              <button
                className={`py-2 px-4 font-semibold ${
                  activeTab === tab.id
                    ? 'bg-white text-primary border-t border-l border-r rounded-t'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TabNavigation;