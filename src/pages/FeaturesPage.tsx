import React from 'react';
import Features from '../components/Features/Features';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Features</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Discover how our comprehensive ERP solution can transform your educational institution
        </p>
      </div>
      <Features />
      
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Attendance Management',
              'Grade Book System',
              'Parent Portal',
              'Library Management',
              'Transport Management',
              'Hostel Management',
              'Fee Management',
              'HR & Payroll',
              'Inventory Management'
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Comprehensive tools and features to manage {feature.toLowerCase()} efficiently.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}