import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Principal, International School',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'EduERP has revolutionized how we manage our school. The efficiency gains are remarkable.',
  },
  {
    name: 'Michael Chen',
    role: 'IT Director, Primary School',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The technical support and customization options are exceptional. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Join hundreds of satisfied schools using EduERP</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}