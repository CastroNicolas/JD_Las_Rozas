import Link from "next/link";
import Image from "next/image";
import {
  Leaf, Utensils, Wheat, Baby, Apple,
  ChevronRight, MapPin, Star,
  Heart, Coffee, Wine, ArrowRight,
} from "lucide-react";

/* ══════════════════════════════════════
   SUB-COMPONENTES
══════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 justify-center mb-4">
      <div className="h-px w-6 bg-[#C9A84C]" />
      <span className="font-lato text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase">
        {children}
      </span>
      <div className="h-px w-6 bg-[#C9A84C]" />
    </div>
  );
}

function CocinaCard({
  bandera, titulo, descripcion, platos, href,
}: {
  bandera: string; titulo: string; descripcion: string; platos: string[]; href: string;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
      <div className="relative bg-gradient-to-br from-[#0D1F18] via-[#1B4332] to-[#2D6A4F] p-6 sm:p-8 flex items-center gap-4 overflow-hidden">
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#C9A84C]/10 blur-2xl" />
        <span className="text-4xl sm:text-5xl drop-shadow-lg relative z-10">{bandera}</span>
        <div className="relative z-10">
          <p className="font-lato text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-1">Cocina Auténtica</p>
          <h3 className="font-playfair text-white text-2xl sm:text-3xl font-semibold leading-tight">{titulo}</h3>
        </div>
      </div>
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        <p className="font-lato text-gray-500 text-[13px] leading-relaxed mb-5">{descripcion}</p>
        <ul className="flex flex-col gap-2 mb-6 flex-1">
          {platos.map((p) => (
            <li key={p} className="flex items-center gap-2.5 font-lato text-[13px] text-[#1A1A1A]">
              <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
              {p}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="group/btn inline-flex items-center gap-2 text-[#1B4332] font-lato font-bold text-[11px] uppercase tracking-[0.2em] border-t border-gray-100 pt-4 hover:text-[#C9A84C] transition-colors"
        >
          Ver platos completos
          <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function EspecialidadCard({
  icon, titulo, descripcion, bg, href,
}: {
  icon: React.ReactNode; titulo: string; descripcion: string; bg: string; href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300"
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${bg} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
        {icon}
      </div>
      <h4 className="font-playfair text-[#1B4332] text-lg font-semibold mb-1.5 group-hover:text-[#2D6A4F] transition-colors leading-tight">
        {titulo}
      </h4>
      <p className="font-lato text-gray-400 text-[12px] sm:text-[13px] leading-relaxed flex-1">{descripcion}</p>
      <div className="mt-3 flex items-center gap-1 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-lato text-[10px] uppercase tracking-widest font-bold">Ver más</span>
        <ArrowRight size={10} />
      </div>
    </Link>
  );
}

function TestimonioCard({ texto, nombre, cargo }: { texto: string; nombre: string; cargo: string }) {
  return (
    <div className="flex flex-col gap-4 p-6 sm:p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
        ))}
      </div>
      <p className="font-playfair text-[#1A1A1A] text-[15px] leading-relaxed italic">
        &ldquo;{texto}&rdquo;
      </p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-lato text-[#1B4332] font-bold text-[13px]">{nombre}</p>
        <p className="font-lato text-gray-400 text-[11px] tracking-wide mt-0.5">{cargo}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   PÁGINA PRINCIPAL
══════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con next/image — optimiza LCP automáticamente */}
        <Image
          src="/images/hero.jpg"
          alt="Bistro Jardín & Doux — Las Rozas, Madrid"
          fill
          priority
          quality={85}
           className="object-cover"
          style={{ objectPosition: '50% 40%' }}
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F18]/5 via-black/2 to-[#0D1F18]/8" />

        {/* Grano de textura sutil */}
        <div className="grain-texture absolute inset-0 opacity-[0.03] pointer-events-none" />

        {/* Anillos decorativos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full border border-[#C9A84C]/8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[800px] sm:h-[800px] rounded-full border border-[#C9A84C]/5 pointer-events-none" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center px-4 sm:px-6 flex flex-col items-center w-full max-w-3xl mx-auto pt-20 pb-24">

          {/* Logo hero */}
          <div className="relative mb-8 sm:mb-10 animate-fade-up">
            {/* Halo ambiental dorado */}
            <div className="absolute inset-0 rounded-full bg-[#C9A84C]/25 blur-3xl scale-[1.5] pointer-events-none" />

            {/* Logo con pulso */}
            <div className="logo-hero-glow relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64">
              {/* Anillo dorado pegado al borde real del logo */}
              <div className="logo-hero-ring absolute inset-[5%] pointer-events-none z-10" />
              <Image
                src="/images/logo.png"
                alt="Bistro J&D — Jardín & Doux"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
                className="object-contain mix-blend-multiply relative z-0"
                priority
              />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 animate-fade-up-delay-1">
            <div className="h-px w-8 sm:w-14 bg-[#C9A84C]/60" />
            <span className="font-lato text-[#C9A84C] text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase whitespace-nowrap">
              Las Rozas · Madrid
            </span>
            <div className="h-px w-8 sm:w-14 bg-[#C9A84C]/60" />
          </div>

          {/* Nombre */}
          <h1 className="font-playfair text-white font-bold leading-none tracking-tight animate-fade-up-delay-1
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            JARDÍN <span className="text-[#C9A84C]">&</span> DOUX
          </h1>
          <p className="font-lato text-white/45 text-[10px] sm:text-[11px] tracking-[0.5em] sm:tracking-[0.6em] uppercase mt-3 animate-fade-up-delay-1">
            Bistro · Café · Bar · Restaurante
          </p>

          {/* Tagline */}
          <p className="font-playfair text-white/60 text-base sm:text-lg md:text-xl max-w-sm sm:max-w-lg mt-6 sm:mt-8 leading-relaxed italic animate-fade-up-delay-2 px-2">
            &ldquo;Donde el sabor del Cono Sur
            <br className="hidden sm:block" />
            {" "}se encuentra con la elegancia de Madrid.&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 w-full xs:w-auto animate-fade-up-delay-3 px-4 xs:px-0">
            <Link
              href="/carta"
              className="group inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943d] text-white font-lato font-bold text-[11px] uppercase tracking-[0.2em] px-7 sm:px-9 py-4 transition-all duration-300 shadow-lg shadow-[#C9A84C]/20 rounded-sm"
            >
              <Utensils size={13} />
              Explorar la Carta
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-[#C9A84C]/60 text-white/75 hover:text-white font-lato text-[11px] uppercase tracking-[0.2em] px-7 sm:px-9 py-4 transition-all duration-300 rounded-sm"
            >
              Nuestra Historia
            </Link>
          </div>
        </div>

        {/* Scroll indicator — fuera del flex div, anclado al bottom del section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce pointer-events-none">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#C9A84C]/50" />
          <span className="font-lato text-[9px] tracking-[0.4em] text-white/30 uppercase">scroll</span>
        </div>
      </section>

      {/* ═══ STRIP ═══ */}
      <section className="bg-[#0D1F18] border-y border-[#1B4332]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          {[
            { e: "☀️", t: "Desayunos" },
            { e: "🇵🇾", t: "Cocina Paraguaya" },
            { e: "🇦🇷", t: "Cocina Argentina" },
            { e: "🫒", t: "Tapas" },
            { e: "🌱", t: "Vegano" },
            { e: "🌾", t: "Sin Gluten" },
            { e: "☕", t: "Café" },
            { e: "🍷", t: "Copas" },
          ].map(({ e, t }) => (
            <span key={t} className="flex items-center gap-1.5 font-lato text-white/45 hover:text-white/75 text-[11px] sm:text-[12px] tracking-wide transition-colors cursor-default">
              <span className="text-base sm:text-lg">{e}</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ NOSOTROS ═══ */}
      <section id="nosotros" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F4ED]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>
            <SectionLabel>Nuestra Historia</SectionLabel>
            <h2 className="font-playfair text-[#0D1F18] font-bold leading-[1.1] mb-6 sm:mb-8
              text-4xl sm:text-5xl md:text-6xl">
              Un jardín
              <br />
              <em className="font-normal text-[#2D6A4F]">de sabores</em>
              <br />
              en Madrid
            </h2>
            <div className="space-y-4 font-lato text-gray-500 text-[13px] sm:text-[14px] leading-[1.9]">
              <p>
                <strong className="text-[#1B4332] font-semibold">Jardín & Doux</strong> es el encuentro entre dos culturas culinarias del Cono Sur y la calidez de un bistro europeo. Un espacio donde el tiempo pasa despacio, el café es de especialidad y cada plato lleva la memoria de una receta familiar.
              </p>
              <p>
                Nacimos frente al parque de Las Rozas porque creemos que la buena gastronomía y la naturaleza van de la mano. Nuestra cocina abierta, nuestro café de origen y nuestra carta de vinos latinoamericanos forman una experiencia que no encontrarás en otro lugar de Madrid.
              </p>
              <p>
                Somos <strong className="text-[#1B4332]">café, bar y restaurante</strong>. Comenzamos el día con desayunos que enamoran, alargamos el mediodía con platos de alma y terminamos la noche con copas y conversación.
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-8">
              <Heart size={13} className="text-[#C9A84C] fill-[#C9A84C] shrink-0" />
              <span className="font-lato text-[11px] text-gray-400 italic tracking-wide">
                Hechos con amor, servidos con orgullo — Las Rozas, Madrid
              </span>
            </div>
          </div>

          <div className="relative flex flex-col gap-4">
            <div className="bg-gradient-to-br from-[#0D1F18] to-[#1B4332] rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center gap-5 shadow-2xl">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-xl">
                <Image
                  src="/images/logo.png"
                  alt="Logo Jardín & Doux"
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-playfair text-white text-xl sm:text-2xl font-semibold">Jardín & Doux</p>
                <p className="font-lato text-[#74C69D] text-[9px] tracking-[0.3em] uppercase mt-1">
                  Bistro · Las Rozas · Madrid
                </p>
              </div>
              <div className="h-px w-10 bg-[#C9A84C]/40" />
              <p className="font-lato text-white/50 text-[12px] sm:text-[13px] leading-relaxed max-w-[220px]">
                Cocina paraguaya & argentina en el corazón de Las Rozas
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { n: "2",   u: "Cocinas",  sub: "del Cono Sur" },
                { n: "60+", u: "Platos",   sub: "en carta" },
                { n: "8h",  u: "Abiertos", sub: "de 8:00 a 24:00" },
              ].map(({ n, u, sub }) => (
                <div key={u} className="bg-white rounded-2xl p-3 sm:p-4 text-center border border-gray-100 shadow-sm">
                  <p className="font-playfair text-[#1B4332] text-xl sm:text-2xl font-bold">{n}</p>
                  <p className="font-lato text-[#1B4332] text-[10px] sm:text-[11px] font-bold uppercase tracking-wide mt-0.5">{u}</p>
                  <p className="font-lato text-gray-400 text-[9px] sm:text-[10px] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#C9A84C]/15 rounded-3xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#74C69D]/15 rounded-3xl -z-10 hidden sm:block" />
          </div>
        </div>
      </section>

      {/* ═══ 3 CONCEPTOS ═══ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0D1F18] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>Lo que somos</SectionLabel>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold">
              Un espacio, tres experiencias
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "☕",
                titulo: "Café & Mañanas",
                desc: "Café de especialidad de origen único, medialunas porteñas recién horneadas y desayunos que convierten la mañana en un ritual. De 8:00 a 12:30.",
                tag: "Ver desayunos",
                href: "/carta#desayunos",
              },
              {
                icon: "🍽️",
                titulo: "Mesa & Cocina",
                desc: "Cocina paraguaya y argentina de autor. Sopa paraguaya, asado de parrilla, empanadas tucumanas y platos con historia del Cono Sur.",
                tag: "Ver carta",
                href: "/carta",
              },
              {
                icon: "🍷",
                titulo: "Bar & Copas",
                desc: "Vinos de Mendoza y La Rioja, cócteles con identidad como el Tereré Cóctel o el Fernet con Coca, y una barra donde alargar la noche.",
                tag: "Ver bar",
                href: "/carta#copas",
              },
            ].map(({ icon, titulo, desc, tag, href }) => (
              <Link
                key={titulo}
                href={href}
                className="group flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 border border-[#1B4332] hover:border-[#C9A84C]/40 rounded-2xl transition-all duration-300 hover:bg-[#1B4332]/30"
              >
                <span className="text-3xl sm:text-4xl">{icon}</span>
                <h3 className="font-playfair text-lg sm:text-xl font-semibold group-hover:text-[#C9A84C] transition-colors">
                  {titulo}
                </h3>
                <p className="font-lato text-white/45 text-[12px] sm:text-[13px] leading-relaxed flex-1">{desc}</p>
                <span className="font-lato text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                  {tag} <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COCINAS ═══ */}
      <section id="cocinas" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F0EBE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>Dos tradiciones, una mesa</SectionLabel>
            <h2 className="font-playfair text-[#0D1F18] text-3xl sm:text-4xl md:text-5xl font-bold">
              Nuestras Cocinas
            </h2>
            <p className="font-lato text-gray-400 text-[13px] mt-4 max-w-sm mx-auto leading-relaxed px-2">
              Recetas auténticas del Cono Sur elaboradas con ingredientes frescos y técnicas tradicionales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <CocinaCard
              bandera="🇵🇾"
              titulo="Paraguaya"
              descripcion="Una de las cocinas más originales y menos conocidas de América del Sur. Arraigada en la cultura guaraní, sus sabores son profundos, honestos y únicos en Madrid."
              platos={["Sopa Paraguaya", "Chipa y Chipa Guazú", "Mbejú de Almidón", "Vori-vori de Gallina", "Bife Koygua", "Empanadas Paraguayas"]}
              href="/carta#paraguaya"
            />
            <CocinaCard
              bandera="🇦🇷"
              titulo="Argentina"
              descripcion="Del fuego lento del asado a la masa perfecta de la empanada tucumana. La gastronomía argentina llega a Las Rozas con toda su identidad y carácter."
              platos={["Empanadas Tucumanas", "Asado Mixto de Parrilla", "Milanesa Napolitana", "Provoleta a la Parrilla", "Locro Norteño", "Choripán Artesanal"]}
              href="/carta#argentina"
            />
          </div>
        </div>
      </section>

      {/* ═══ PARA TODOS ═══ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F4ED]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>Inclusivos y conscientes</SectionLabel>
            <h2 className="font-playfair text-[#0D1F18] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Para Todos
            </h2>
            <p className="font-lato text-gray-400 text-[13px] max-w-sm mx-auto leading-relaxed">
              Cada comensal merece disfrutar sin restricciones.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
            <EspecialidadCard
              icon={<Coffee size={20} className="text-amber-700" />}
              titulo="Desayunos"
              descripcion="Medialunas porteñas, churros, brunch de fin de semana y café de especialidad."
              bg="bg-amber-50"
              href="/carta#desayunos"
            />
            <EspecialidadCard
              icon={<Leaf size={20} className="text-emerald-700" />}
              titulo="Vegano"
              descripcion="Platos 100% de origen vegetal. Nutritivos, creativos y llenos de sabor."
              bg="bg-emerald-50"
              href="/carta#vegano"
            />
            <EspecialidadCard
              icon={<Wheat size={20} className="text-yellow-700" />}
              titulo="Sin Gluten"
              descripcion="Preparaciones certificadas sin TACC. Apto celíacos, sin renunciar al sabor."
              bg="bg-yellow-50"
              href="/carta#sin-tacc"
            />
            <EspecialidadCard
              icon={<Baby size={20} className="text-sky-600" />}
              titulo="Niños"
              descripcion="Porciones adaptadas y sabores que los más pequeños van a adorar."
              bg="bg-sky-50"
              href="/carta#ninos"
            />
            <EspecialidadCard
              icon={<Apple size={20} className="text-rose-500" />}
              titulo="Postres"
              descripcion="Dulces artesanales, frutas de temporada y postres del Cono Sur."
              bg="bg-rose-50"
              href="/carta#postres"
            />
            <EspecialidadCard
              icon={<Wine size={20} className="text-purple-700" />}
              titulo="Bar"
              descripcion="Malbec mendocino, Fernet con Coca, Tereré Cóctel y cócteles de autor."
              bg="bg-purple-50"
              href="/carta#copas"
            />
          </div>
        </div>
      </section>

      {/* ═══ CTA CARTA ═══ */}
      <section className="cta-gradient relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-xl">
              <Image
                src="/images/logo.png"
                alt="J&D"
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain"
              />
            </div>
          </div>
          <SectionLabel>Carta Digital</SectionLabel>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
            Escanea · Elige · Disfruta
          </h2>
          <p className="font-lato text-white/50 text-[13px] sm:text-[14px] mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed px-2">
            Nuestra carta digital con todos los platos, precios, información nutricional e indicadores de alérgenos.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 xs:px-0">
            <Link
              href="/carta"
              className="group inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943d] text-white font-lato font-bold text-[11px] uppercase tracking-[0.2em] px-8 sm:px-10 py-4 transition-all shadow-xl shadow-[#C9A84C]/20 rounded-sm"
            >
              <Utensils size={13} />
              Ver la Carta
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center border border-white/20 hover:border-[#C9A84C]/50 text-white/60 hover:text-white font-lato text-[11px] uppercase tracking-[0.2em] px-8 sm:px-10 py-4 transition-all rounded-sm"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F0EBE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>Lo que dicen</SectionLabel>
            <h2 className="font-playfair text-[#0D1F18] text-3xl sm:text-4xl md:text-5xl font-bold">
              Nuestros Comensales
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            <TestimonioCard
              texto="La sopa paraguaya más auténtica que he probado fuera de Asunción. El ambiente frente al parque es una maravilla. Volveré cada semana."
              nombre="María González"
              cargo="Vecina de Las Rozas"
            />
            <TestimonioCard
              texto="Las empanadas tucumanas son exactamente como las de mi abuela en Tucumán. Un rincón de Argentina en Las Rozas. Imprescindible."
              nombre="Carlos Méndez"
              cargo="Cliente habitual"
            />
            <TestimonioCard
              texto="Vine con toda la familia, incluyendo mi hija celíaca. Tienen opciones sin gluten marcadas en carta y el personal fue muy atento."
              nombre="Laura Pardo"
              cargo="Familia de Las Rozas"
            />
          </div>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd41834116d0732b:0xb31c9140700267d1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white rounded-xl px-5 sm:px-6 py-3.5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow font-lato text-[12px] sm:text-[13px] text-gray-600 hover:text-[#1B4332]"
            >
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </span>
              Ver reseñas en <strong>Google Maps</strong>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO ═══ */}
      <section id="contacto" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F4ED]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>Visítanos</SectionLabel>
            <h2 className="font-playfair text-[#0D1F18] text-3xl sm:text-4xl md:text-5xl font-bold">
              Encuéntranos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Ubicación */}
              <div className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1B4332]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-[#1B4332]" />
                </div>
                <div>
                  <p className="font-playfair text-[#0D1F18] font-semibold text-base sm:text-lg">Ubicación</p>
                  <p className="font-lato text-gray-500 text-[12px] sm:text-[13px] mt-1 leading-relaxed">
                    Las Rozas de Madrid · Madrid, España<br />Frente al parque
                  </p>
                  <a
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd41834116d0732b:0xb31c9140700267d1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#40916C] hover:text-[#1B4332] font-lato text-[11px] sm:text-[12px] font-bold mt-2 transition-colors"
                  >
                    <MapPin size={10} />
                    Ver en Google Maps <ArrowRight size={10} />
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Star size={17} className="text-[#C9A84C]" />
                </div>
                <div className="flex-1">
                  <p className="font-playfair text-[#0D1F18] font-semibold text-base sm:text-lg">Horarios</p>
                  <div className="font-lato text-gray-500 text-[12px] sm:text-[13px] mt-1 space-y-1">
                    <div className="flex justify-between">
                      <span>Lunes – Viernes</span>
                      <span className="font-semibold text-[#1B4332]">8:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado – Domingo</span>
                      <span className="font-semibold text-[#1B4332]">9:00 – 24:00</span>
                    </div>
                    <p className="text-[#40916C] text-[11px] pt-1 font-medium">
                      Desayunos hasta las 12:30 · Cocina continua
                    </p>
                  </div>
                </div>
              </div>

              {/* Reservas */}
              <div className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                  <Coffee size={17} className="text-amber-700" />
                </div>
                <div>
                  <p className="font-playfair text-[#0D1F18] font-semibold text-base sm:text-lg">Reservas</p>
                  <p className="font-lato text-gray-500 text-[12px] sm:text-[13px] mt-1">+34 XXX XXX XXX</p>
                  <p className="font-lato text-gray-400 text-[11px] mt-0.5">También por WhatsApp · Reserva tu mesa</p>
                </div>
              </div>
            </div>

            {/* Mapa — lazy loaded para no bloquear LCP */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-80 md:h-full min-h-[280px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.278693490757!2d-3.8707665999999987!3d40.4912199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41834116d0732b%3A0xb31c9140700267d1!2sRestaurante%20Donde%20Carmen!5e0!3m2!1ses-419!2ses!4v1781897117868!5m2!1ses-419!2ses"
                width="100%"
                height="100%"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bistro J&D en Google Maps — Las Rozas, Madrid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
