import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const WhatsappWidget = () => {
  const [showQR, setShowQR] = useState(false);
  const phoneNumber = "34654087027";
  const message = "Hello! I need more information about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
   <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-center"
      onMouseEnter={() => setShowQR(true)}
      onMouseLeave={() => setShowQR(false)}
    >
      {/* Contenedor del widget */}
      <div className="bg-green-500 text-white rounded-2xl shadow-lg flex flex-col items-center p-4 transition-transform transform hover:scale-105 cursor-pointer">
        
        {/* Texto superior */}
        <span className="font-bold text-lg mb-2">Contact us!</span>

        {/* Botón con logo WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-white rounded-full"
        >
          {/* Logo oficial WhatsApp */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>

        {/* QR dinámico */}
        {showQR && (
          <div className="mt-3 p-2 bg-white rounded-lg shadow-lg transition-opacity duration-300">
            <QRCodeSVG value={whatsappLink} size={140} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsappWidget;