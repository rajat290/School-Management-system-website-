import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your School Management
            <span className="text-indigo-600"> with EduERP</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline administration, enhance communication, and elevate learning experiences
            with our comprehensive school management solution.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg">
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}