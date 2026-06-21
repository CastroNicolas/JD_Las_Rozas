"use client";

import Image from "next/image";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  const href = "https://wa.me/34682044125";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <span
        className={`
          font-lato text-[12px] font-semibold text-white bg-[#0D1F18]/90
          backdrop-blur-sm px-3.5 py-2 rounded-full shadow-lg whitespace-nowrap
          transition-all duration-300
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Escríbenos por WhatsApp
      </span>

      {/* Botón circular */}
      <div className="relative">
        {/* Anillo pulsante */}
        <span className="absolute inset-0 rounded-full bg-[#20B2AA]/30 animate-ping" />

        {/* Círculo principal */}
        <div
          className={`
            relative w-14 h-14 rounded-full bg-white shadow-xl
            border-2 border-[#20B2AA]/40
            flex items-center justify-center
            transition-all duration-300
            group-hover:scale-110 group-hover:shadow-2xl group-hover:border-[#20B2AA]
          `}
        >
          <div className="relative w-9 h-9">
            <Image
              src="/images/logo-ln.png"
              alt="LN — Marca personal"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
