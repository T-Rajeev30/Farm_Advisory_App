// src/pages/SoilCheck.jsx
import React from "react";

const SoilCheck = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Soil Health Check
      </h2>
      <p className="text-gray-600 mb-6">
        Enter your soil information below to get personalized recommendations.
      </p>
      {/* TODO: Integrate the SoilCheckForm component here */}
    </div>
  );
};

export default SoilCheck;
