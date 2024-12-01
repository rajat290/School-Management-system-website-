import React from 'react';
import { Play } from 'lucide-react';

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See EduERP in Action</h2>
          <p className="text-xl text-gray-600">Watch how our platform transforms school management</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Admin Dashboard Overview',
              thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
              duration: '3:45'
            },
            {
              title: 'Student Management System',
              thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
              duration: '4:20'
            },
            {
              title: 'Parent Portal Demo',
              thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
              duration: '2:55'
            }
          ].map((video) => (
            <div key={video.title} className="relative group">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 p-4 rounded-full">
                    <Play className="h-8 w-8 text-indigo-600" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}