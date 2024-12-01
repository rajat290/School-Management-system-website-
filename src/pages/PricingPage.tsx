import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$299',
    period: '/month',
    description: 'Perfect for small schools starting their digital journey',
    features: [
      'Up to 500 students',
      'Basic attendance management',
      'Grade book system',
      'Parent portal',
      'Email support',
      'Basic reporting'
    ]
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    description: 'Ideal for growing schools with advanced needs',
    features: [
      'Up to 2000 students',
      'Advanced attendance tracking',
      'Complete grade management',
      'Parent & student portal',
      'Priority email & phone support',
      'Advanced analytics',
      'Library management',
      'Transport management'
    ]
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/month',
    description: 'Full-featured solution for large institutions',
    features: [
      'Unlimited students',
      'Full ERP suite',
      'Custom modules',
      'API access',
      '24/7 premium support',
      'Advanced security features',
      'White-label option',
      'Dedicated account manager',
      'Custom integrations'
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your school</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-8">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}