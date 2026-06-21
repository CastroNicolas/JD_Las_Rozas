"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio",    href: "/" },
  { label: "Nosotros",  href: "/#nosotros" },
  { label: "Cocinas",   href: "/#cocinas" },
  { label: "Carta",     href: "/carta" },
  { label: "Reservas",  href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1F18]/96 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18 md:h-22 py-3">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 md:w-14 md:h-14 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Bistro J&D — Jardín & Doux"
              fill
              sizes="56px"
              className="object-contain mix-blend-multiply drop-shadow-lg"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-playfair text-white text-lg font-bold tracking-widest">
              JARDÍN <span className="text-[#C9A84C]">&</span> DOUX
            </span>
            <span className="font-lato text-white/50 text-[9px] tracking-[0.35em] uppercase mt-0.5">
              Bistro · Las Rozas · Madrid
            </span>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-lato text-white/75 hover:text-[#74C69D] text-[13px] tracking-[0.15em] uppercase transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA + burger ── */}
        <div className="flex items-center gap-4">
          <Link
            href="/carta"
            className="hidden md:inline-flex items-center gap-2 border border-[#C9A84C] hover:bg-[#C9A84C] text-[#C9A84C] hover:text-white font-lato text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300"
          >
            Ver Carta
          </Link>
          <button
            className="md:hidden text-white/80 hover:text-white p-1 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden bg-[#0D1F18] border-t border-[#1B4332] transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-6 py-3.5 text-white/70 hover:text-[#74C69D] hover:bg-[#1B4332]/40 font-lato text-[13px] tracking-[0.15em] uppercase transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="px-6 pt-3 pb-2">
            <Link
              href="/carta"
              onClick={() => setOpen(false)}
              className="block text-center border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white font-lato text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-3.5 transition-all"
            >
              Ver Carta
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
