import React from 'react';
import { Users, BarChart, Clock, Shield } from 'lucide-react';

const features = [
  {
    title: 'Real-time Analytics',
    description: 'Track attendance, grades, and performance metrics instantly.',
    icon: BarChart,
  },
  {
    title: 'User Management',
    description: 'Easily manage students, teachers, and staff accounts.',
    icon: Users,
  },
  {
    title: '24/7 Availability',
    description: 'Access your school data anytime, anywhere.',
    icon: Clock,
  },
  {
    title: 'Data Security',
    description: 'Enterprise-grade security for your sensitive information.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Discover the features that make our ERP system stand out</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors group"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}