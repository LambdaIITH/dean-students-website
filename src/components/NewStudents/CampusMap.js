import React from 'react';
import { MapPin } from 'lucide-react';

const CampusMap = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <MapPin className="mr-3 text-blue-600" />
        Campus Map
      </h2>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <MapPin className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Campus Map</h3>
            <p className="text-gray-600 mb-4">
              Explore the campus layout including hostels, messes, sports facilities, academic buildings, and more.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Interactive Map
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">🏠 Hostels</h4>
            <p className="text-sm text-gray-700">Boys and Girls hostels with modern amenities</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">🍽️ Mess & Canteen</h4>
            <p className="text-sm text-gray-700">Multiple dining options across campus</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">🏃 Sports Complex</h4>
            <p className="text-sm text-gray-700">Gymnasium, courts, and outdoor facilities</p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">🏛️ Academic Buildings</h4>
            <p className="text-sm text-gray-700">Department buildings and lecture halls</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusMap;
