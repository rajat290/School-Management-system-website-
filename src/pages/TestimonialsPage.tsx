import React from 'react';
import Testimonials from '../components/Testimonials/Testimonials';

const additionalTestimonials = [
  {
    name: 'David Wilson',
    role: 'School Administrator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The implementation process was smooth, and the support team was incredibly helpful.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head Teacher',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'EduERP has made our administrative tasks so much easier. We love how user-friendly it is.',
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          See what our clients have to say about their experience with EduERP
        </p>
      </div>
      
      <Testimonials />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {additionalTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-indigo-50 p-8 rounded-xl"
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
    </main>
  );
}