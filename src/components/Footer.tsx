import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1F18] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

        {/* Marca */}
        <div className="sm:col-span-2 md:col-span-1 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 shrink-0">
              <Image src="/images/logo.png" alt="Bistro J&D" fill sizes="56px" className="object-contain mix-blend-multiply drop-shadow-md" />
            </div>
            <div>
              <p className="font-playfair text-white text-lg font-bold tracking-wide">
                JARDÍN <span className="text-[#C9A84C]">&</span> DOUX
              </p>
              <p className="font-lato text-white/35 text-[9px] tracking-[0.3em] uppercase mt-0.5">
                Bistro · Las Rozas
              </p>
            </div>
          </div>
          <p className="font-lato text-white/45 text-[12px] sm:text-[13px] leading-relaxed">
            Café · Bar · Restaurante. El sabor del Cono Sur en Las Rozas, Madrid.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-lato text-white/35 hover:text-[#74C69D] text-[12px] tracking-wide transition-colors">
              Instagram
            </a>
            <a href="#" className="font-lato text-white/35 hover:text-[#74C69D] text-[12px] tracking-wide transition-colors">
              Facebook
            </a>
          </div>
        </div>

        {/* Carta */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair text-[#C9A84C] text-base sm:text-lg">Nuestra Carta</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              ["☀️ Desayunos",       "/carta#desayunos"],
              ["🇵🇾 Cocina Paraguaya", "/carta#paraguaya"],
              ["🇦🇷 Cocina Argentina", "/carta#argentina"],
              ["🫒 Tapas & Raciones", "/carta#tapas"],
              ["🌱 Menú Vegano",      "/carta#vegano"],
              ["🌾 Sin Gluten",       "/carta#sin-tacc"],
              ["☕ Café & Bebidas",   "/carta#bebidas"],
              ["🍷 Copas & Bar",      "/carta#copas"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="font-lato text-white/45 hover:text-[#74C69D] text-[12px] sm:text-[13px] transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair text-[#C9A84C] text-base sm:text-lg">Navegación</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              ["Inicio",    "/"],
              ["Nosotros",  "/#nosotros"],
              ["Cocinas",   "/#cocinas"],
              ["Carta",     "/carta"],
              ["Reservas",  "/#contacto"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="font-lato text-white/45 hover:text-[#74C69D] text-[12px] sm:text-[13px] transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair text-[#C9A84C] text-base sm:text-lg">Información</h4>
          <ul className="flex flex-col gap-3.5 sm:gap-4">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-[#74C69D] mt-0.5 shrink-0" />
              <div>
                <p className="font-lato text-white/55 text-[12px] sm:text-[13px] leading-relaxed">
                  Las Rozas de Madrid
                  <br />
                  Frente al parque
                </p>
                <a
                  href="https://www.google.com/maps/place/Restaurante+Donde+Carmen/@40.4912281,-3.8707666,17z/data=!3m1!4b1!4m6!3m5!1s0xd41834116d0732b:0xb31c9140700267d1!8m2!3d40.4912199!4d-3.8707666!16s%2Fg%2F11s892vtp6?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#74C69D] hover:text-white text-[11px] mt-1 inline-block transition-colors"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-[#74C69D] shrink-0" />
              <span className="font-lato text-white/55 text-[12px] sm:text-[13px]">+34 XXX XXX XXX</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={14} className="text-[#74C69D] mt-0.5 shrink-0" />
              <div className="font-lato text-white/55 text-[12px] sm:text-[13px] space-y-0.5">
                <p>Lun–Vie: 8:00 – 23:00</p>
                <p>Sáb–Dom: 9:00 – 24:00</p>
                <p className="text-[#74C69D] text-[11px] mt-1">Desayunos hasta las 12:30</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1B4332] py-4 sm:py-6 px-4 text-center font-lato text-[10px] sm:text-[11px] text-white/25 tracking-wide">
        © {new Date().getFullYear()} Bistro Jardín & Doux · Las Rozas, Madrid · Todos los derechos reservados
      </div>
    </footer>
  );
}
