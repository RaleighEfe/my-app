import React from "react";

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const url = "https://wa.me/2349121309034";
    window.open(url);
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-primary px-3 py-2 rounded-lg text-white text-base hover:bg-orange-600"
    >
      Start WhatsApp Chat
    </button>
  );
}

export default WhatsAppButton;
