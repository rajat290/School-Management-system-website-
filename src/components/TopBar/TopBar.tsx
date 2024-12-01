import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-indigo-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Notification Bar */}
          <div className="flex-1 mx-8 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              🎉 Special offer: Get 20% off on annual subscriptions! | 
              📚 New feature: Advanced Analytics Dashboard launched! | 
              🌟 Join our upcoming webinar on school management best practices
            </div>
          </div>

          {/* Helpline */}
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 animate-pulse text-green-400" />
            <span className="font-medium">Helpline: +917348765761</span>
          </div>
        </div>
      </div>
    </div>
  );
}
