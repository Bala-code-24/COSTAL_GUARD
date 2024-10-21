
import React, { useState } from 'react';

const Help = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const professionals = {
    "Medical Emergency": [
      { name: "Dr. John Doe", specialization: "Cardiologist", contact: "+91 9876543210", distance: "2 km away" },
      { name: "Dr. Jane Smith", specialization: "General Physician", contact: "+91 9876543211", distance: "3 km away" },
    ],
    "Plumbing Issues": [
      { name: "Raj Plumbing Services", contact: "+91 9876543212", distance: "4 km away" },
      { name: "QuickFix Plumbers", contact: "+91 9876543213", distance: "5 km away" },
    ],
    "Electrical Problems": [
      { name: "PowerFix Electricals", contact: "+91 9876543214", distance: "1.5 km away" },
      { name: "BrightSpark Electricians", contact: "+91 9876543215", distance: "3 km away" },
    ],
    "Transport Help": [
      { name: "FastRide Taxi", contact: "+91 9876543216", distance: "1 km away" },
      { name: "Local Car Rentals", contact: "+91 9876543217", distance: "2.5 km away" },
    ],
    "General Assistance": [
      { name: "QuickFix Handyman", contact: "+91 9876543218", distance: "3 km away" },
      { name: "HomeCare Services", contact: "+91 9876543219", distance: "4 km away" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🚨 Help Section</h1>
      <p className="text-center text-lg mb-4">Choose a category of help to find assistance near you:</p>

      <div className="flex flex-wrap  justify-center gap-4">
        {Object.keys(professionals).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 ${
              selectedCategory === category ? "bg-blue-800" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">{selectedCategory} Professionals:</h2>
          <div className="flex flex-col items-center">
            {professionals[selectedCategory].map((professional, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 m-2 w-full max-w-md text-center"
              >
                <h3 className="text-lg font-bold">{professional.name}</h3>
                <p>{professional.specialization}</p>
                <p>Contact: {professional.contact}</p>
                <p>{professional.distance}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
