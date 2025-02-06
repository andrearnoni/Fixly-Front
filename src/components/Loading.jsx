import React from "react";
import { Drill, Paintbrush, Wrench, Hammer, Home } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute w-full h-full">
            <Drill className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 text-blue-500" />
            <Paintbrush className="absolute top-1/2 right-0 translate-x-2 -translate-y-1/2 w-6 h-6 text-green-500" />
            <Wrench className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-6 h-6 text-purple-500" />
            <Hammer className="absolute top-1/2 left-0 -translate-x-2 -translate-y-1/2 w-6 h-6 text-orange-500" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Home className="w-8 h-8 text-gray-700 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
