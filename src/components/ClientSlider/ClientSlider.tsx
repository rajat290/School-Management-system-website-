import React from 'react';

const clients = [
  {
    name: 'International School',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    name: 'Global Academy',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    name: 'Tech University',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    name: 'Future School',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&h=100&q=80'
  }
];

export default function ClientSlider() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Leading Institutions</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}