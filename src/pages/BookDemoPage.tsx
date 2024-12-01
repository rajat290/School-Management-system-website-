import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  schoolName: z.string().min(2, 'School name must be at least 2 characters'),
  studentCount: z.string(),
  message: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoSchema>;

export default function BookDemoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = (data: DemoFormData) => {
    // Here you would typically handle the demo booking logic
    console.log('Demo booking data:', data);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Demo</h1>
          <p className="text-xl text-gray-600">
            See how EduERP can transform your school's management
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  {...register('name')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">School Name</label>
                <input
                  {...register('schoolName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.schoolName && (
                  <p className="mt-1 text-sm text-red-600">{errors.schoolName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Students</label>
                <select
                  {...register('studentCount')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select range</option>
                  <option value="0-500">0-500</option>
                  <option value="501-2000">501-2000</option>
                  <option value="2000+">2000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Schedule Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}