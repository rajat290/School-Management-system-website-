import React from 'react';
import Contact from '../components/Contact/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          We're here to help! Reach out to us with any questions or concerns
        </p>
      </div>
      
      <Contact />
      
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'How long does implementation take?',
                a: 'Typically, our implementation process takes 2-4 weeks, depending on your school\'s size and requirements.'
              },
              {
                q: 'Do you provide training?',
                a: 'Yes, we provide comprehensive training for all staff members as part of our implementation process.'
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely! We use industry-standard encryption and security measures to protect your data.'
              },
              {
                q: 'Can I customize the system?',
                a: 'Yes, our system is highly customizable to meet your specific needs and requirements.'
              }
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}