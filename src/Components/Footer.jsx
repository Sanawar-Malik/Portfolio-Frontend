import { useState } from "react";

export const Footer = () => { 
  return (
    <div className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div className="flex items-center justify-center gap-8 border-t border-gray-100 py-6">
        <div className="text-sm text-green-600 font-bold">
          <strong className="mr-1">Phone No:</strong> +92 305 192 7078
        </div>
        <div className="text-sm text-green-600 font-bold">
          <strong className="mr-1">Email:</strong> sanawar78m@gmail.com
        </div>
      </div>
    </div>
  );
};


