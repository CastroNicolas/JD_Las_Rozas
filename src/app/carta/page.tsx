"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, Wheat, Baby, Apple, Coffee, Wine } from "lucide-react";

/* ── Tipos ── */
type Tag = "vegano" | "sin-tacc" | "ninos" | "picante" | "nuevo" | "recomendado";

interface Plato {
  nombre: string;
  descripcion: string;
  precio: string;
  tags?: Tag[];
  nota?: string;
}

interface Categoria {
  id: string;
  emoji: string;
  titulo: string;
  subtitulo: string;
  gradiente: string;
  platos: Plato[];
}

/* ── Badge tags ── */
const TAG_MAP: Record<Tag, { label: string; cls: string }> = {
  vegano:      { label: "Vegano",       cls: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  "sin-tacc":  { label: "Sin gluten",   cls: "bg-amber-50 text-amber-700 border border-amber-200" },
  ninos:       { label: "Niños",        cls: "bg-sky-50 text-sky-700 border border-sky-200" },
  picante:     { label: "Picante",      cls: "bg-red-50 text-red-700 border border-red-200" },
  nuevo:       { label: "Nuevo",        cls: "bg-violet-50 text-violet-700 border border-violet-200" },
  recomendado: { label: "★ Chef",       cls: "bg-[#FDF3DC] text-[#8B6200] border border-amber-300" },
};

/* ── Datos del menú ── */
const CATEGORIAS: Categoria[] = [
  {
    id: "desayunos",
    emoji: "☀️",
    titulo: "Desayunos & Meriendas",
    subtitulo: "Servidos de 8:00 a 12:30 · Meriendas de 17:00 a 20:00",
    gradiente: "from-amber-600 to-orange-500",
    platos: [
      {
        nombre: "Tostada con Tomate y AOVE",
        descripcion: "Pan de masa madre tostado, tomate natural rallado y aceite de oliva virgen extra. El clásico madrileño.",
        precio: "3,50 €",
        tags: ["vegano"],
      },
      {
        nombre: "Tostada con Mantequilla y Mermelada",
        descripcion: "Pan de barra tostado con mantequilla artesanal y mermelada de temporada.",
        precio: "3,00 €",
        tags: ["vegano"],
      },
      {
        nombre: "Medialunas Argentinas (x3)",
        descripcion: "Croissants de mantequilla al estilo porteño, hojaldrados y ligeramente dulces. Receta original de Buenos Aires.",
        precio: "4,50 €",
        tags: ["recomendado"],
      },
      {
        nombre: "Chipa del Desayuno",
        descripcion: "Pan guaraní de almidón de mandioca y queso, recién horneado. Ideal para acompañar el café.",
        precio: "3,00 €",
        tags: ["sin-tacc", "recomendado"],
      },
      {
        nombre: "Churros con Chocolate",
        descripcion: "Churros crujientes con chocolate a la taza espeso y cremoso. Tradición de Madrid.",
        precio: "5,00 €",
        tags: ["vegano"],
      },
      {
        nombre: "Tostada Francesa",
        descripcion: "Brioche empapado en huevo y leche, dorado a la plancha. Con azúcar glas y canela.",
        precio: "5,50 €",
      },
      {
        nombre: "Brunch Jade",
        descripcion: "Tostadas de masa madre, huevos revueltos o a la plancha, aguacate, salmón ahumado y zumo natural. Para empezar bien el día.",
        precio: "14,00 €",
        tags: ["recomendado"],
        nota: "Fin de semana también disponible de 12:00 a 16:00",
      },
      {
        nombre: "Yogur con Fruta y Granola",
        descripcion: "Yogur griego natural con frutas de temporada y granola artesanal con miel.",
        precio: "5,50 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Porridge de Avena",
        descripcion: "Avena cocida con leche, canela, manzana caramelizada y frutos secos.",
        precio: "5,00 €",
        tags: ["vegano"],
      },
    ],
  },
  {
    id: "paraguaya",
    emoji: "🇵🇾",
    titulo: "Cocina Paraguaya",
    subtitulo: "Recetas auténticas de tradición guaraní",
    gradiente: "from-[#1B4332] to-[#2D6A4F]",
    platos: [
      {
        nombre: "Sopa Paraguaya",
        descripcion: "Torta salada esponjosa de harina de maíz, queso Paraguay, cebolla y leche. Un plato único en el mundo.",
        precio: "8,00 €",
        tags: ["sin-tacc", "recomendado"],
      },
      {
        nombre: "Chipa Guazú",
        descripcion: "Soufflé horneado de choclo fresco, queso y leche. Suave y ligeramente dulce.",
        precio: "7,50 €",
        tags: ["sin-tacc", "vegano"],
      },
      {
        nombre: "Mbejú de Almidón",
        descripcion: "Tortilla crujiente de almidón de yuca con queso Paraguay. Desayuno y snack tradicional.",
        precio: "6,50 €",
        tags: ["sin-tacc", "vegano"],
      },
      {
        nombre: "Vori-vori de Gallina",
        descripcion: "Caldo reconfortante con bolitas de harina de maíz y queso. El consuelo guaraní.",
        precio: "12,00 €",
        tags: ["sin-tacc", "recomendado"],
      },
      {
        nombre: "Bife Koygua",
        descripcion: "Bife de res guisado con tomate, cebolla y especias paraguayas. Con arroz blanco y ensalada.",
        precio: "17,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Empanadas Paraguayas (x4)",
        descripcion: "Rellenas de carne picada, huevo duro, cebolla y aceitunas. Horneadas.",
        precio: "9,00 €",
      },
      {
        nombre: "Costillas de Cerdo Koygua",
        descripcion: "Costillas de cerdo guisadas lentamente con morrón, tomate y especias del campo.",
        precio: "19,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Mbaipy he´ê (postre)",
        descripcion: "Mazamorra dulce de maíz blanco con leche y azúcar. Postre tradicional guaraní.",
        precio: "5,50 €",
        tags: ["sin-tacc", "vegano"],
      },
    ],
  },
  {
    id: "argentina",
    emoji: "🇦🇷",
    titulo: "Cocina Argentina",
    subtitulo: "El alma del asado y la tradición porteña",
    gradiente: "from-[#3d4f1b] to-[#4a6a2d]",
    platos: [
      {
        nombre: "Empanadas Tucumanas (x4)",
        descripcion: "De carne cortada a cuchillo, cebolla de verdeo, huevo y especias. Jugosas, cerradas a repulgue artesanal.",
        precio: "10,00 €",
        tags: ["recomendado"],
      },
      {
        nombre: "Provoleta a la Parrilla",
        descripcion: "Queso provolone grillado con orégano y ají molido. Con pan artesanal tostado.",
        precio: "9,50 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Asado Mixto de Parrilla",
        descripcion: "Costillas de ternera, chorizo criollo, morcilla y tira de asado. Con chimichurri casero y ensalada criolla.",
        precio: "24,00 €",
        tags: ["sin-tacc", "recomendado"],
        nota: "Para compartir entre 2",
      },
      {
        nombre: "Milanesa Napolitana",
        descripcion: "Milanesa de ternera con salsa de tomate casera, jamón serrano y queso fundido. Con papas fritas.",
        precio: "17,50 €",
        tags: ["recomendado"],
      },
      {
        nombre: "Matambre a la Pizza",
        descripcion: "Matambre tierno cubierto con salsa de tomate, mozzarella y orégano. Clásico porteño de bodegón.",
        precio: "19,00 €",
      },
      {
        nombre: "Locro Norteño",
        descripcion: "Guiso espeso de maíz blanco, porotos, panceta y chorizo colorado. Plato de invierno del NOA.",
        precio: "14,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Choripán Artesanal",
        descripcion: "Chorizo criollo a la parrilla en pan artesanal con chimichurri y salsa criolla. Ícono argentino.",
        precio: "8,50 €",
        tags: ["recomendado"],
      },
      {
        nombre: "Tira de Asado (400g)",
        descripcion: "Tira de costillar a la parrilla al punto. Con papas al rescoldo y chimichurri de la casa.",
        precio: "20,00 €",
        tags: ["sin-tacc"],
      },
    ],
  },
  {
    id: "tapas",
    emoji: "🫒",
    titulo: "Tapas & Raciones",
    subtitulo: "Para picar, compartir o acompañar la copa",
    gradiente: "from-stone-600 to-stone-500",
    platos: [
      {
        nombre: "Tabla de Quesos y Embutidos",
        descripcion: "Selección de quesos de la zona y embutidos ibéricos con pan artesanal y mermelada.",
        precio: "14,00 €",
        tags: ["sin-tacc"],
        nota: "Para 2 personas",
      },
      {
        nombre: "Croquetas de la Casa (x6)",
        descripcion: "Croquetas cremosas de jamón serrano y queso. Crujientes por fuera, fundentes por dentro.",
        precio: "7,50 €",
        tags: ["recomendado"],
      },
      {
        nombre: "Patatas Bravas con Alioli",
        descripcion: "Patatas fritas con salsa brava casera y alioli. El clásico de la barra.",
        precio: "5,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Empanadas Mixtas (x6)",
        descripcion: "3 paraguayas + 3 tucumanas. La mejor forma de conocer las dos cocinas.",
        precio: "13,50 €",
        tags: ["recomendado"],
      },
      {
        nombre: "Provoleta Mini (tapa)",
        descripcion: "Pequeña provoleta a la plancha con chimichurri. Perfecta para acompañar el vino.",
        precio: "6,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Tostadas de Aguacate y Tomate",
        descripcion: "Pan de masa madre tostado con aguacate, tomate cherry y aceite de oliva virgen extra.",
        precio: "7,00 €",
        tags: ["vegano"],
      },
      {
        nombre: "Aceitunas con Especias",
        descripcion: "Aceitunas marinadas con ajo, romero y piel de naranja.",
        precio: "3,50 €",
        tags: ["vegano", "sin-tacc"],
      },
    ],
  },
  {
    id: "vegano",
    emoji: "🌱",
    titulo: "Cocina Vegana",
    subtitulo: "Platos 100% de origen vegetal",
    gradiente: "from-emerald-700 to-green-600",
    platos: [
      {
        nombre: "Bowl Verde de Quinoa",
        descripcion: "Quinoa cocida con aguacate, rúcula, tomate cherry, pepino y aderezo de limón y AOVE.",
        precio: "13,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Guiso de Lentejas con Vegetales",
        descripcion: "Lentejas con zanahoria, calabaza, apio y especias aromáticas. Con pan artesanal.",
        precio: "11,00 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Hamburguesa Vegana de la Casa",
        descripcion: "Medallón de garbanzos y remolacha con lechuga, tomate, cebolla caramelizada y salsa de tahini.",
        precio: "13,00 €",
        tags: ["vegano"],
      },
      {
        nombre: "Tarta de Espinaca y Champiñones",
        descripcion: "Masa casera con relleno de espinaca salteada, champiñones Portobello y ajo. Sin lácteos.",
        precio: "10,50 €",
        tags: ["vegano"],
      },
      {
        nombre: "Ensalada de Temporada",
        descripcion: "Mix de hojas verdes, remolacha, zanahoria, nueces tostadas y vinagreta de mostaza antigua.",
        precio: "9,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Chipa Guazú Vegana",
        descripcion: "Nuestro soufflé de choclo preparado íntegramente con ingredientes de origen vegetal.",
        precio: "7,50 €",
        tags: ["vegano", "sin-tacc"],
      },
    ],
  },
  {
    id: "sin-tacc",
    emoji: "🌾",
    titulo: "Sin Gluten",
    subtitulo: "Certificado sin TACC · Trigo · Avena · Cebada · Centeno",
    gradiente: "from-amber-600 to-yellow-500",
    platos: [
      {
        nombre: "Sopa Paraguaya",
        descripcion: "Torta de maíz y queso. Naturalmente libre de gluten desde su origen guaraní.",
        precio: "8,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Mbejú de Almidón",
        descripcion: "Tortilla de almidón de yuca. Plato nativo, 100% sin gluten.",
        precio: "6,50 €",
        tags: ["sin-tacc", "vegano"],
      },
      {
        nombre: "Asado Mixto de Parrilla",
        descripcion: "Cortes de parrilla con chimichurri sin aditivos y ensalada criolla.",
        precio: "24,00 €",
        tags: ["sin-tacc"],
        nota: "Consultar preparación al personal",
      },
      {
        nombre: "Provoleta a la Parrilla",
        descripcion: "Queso grillado con orégano. Verificado libre de gluten.",
        precio: "9,50 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Locro Norteño",
        descripcion: "Guiso de maíz y porotos. Preparado sin ingredientes con TACC.",
        precio: "14,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Bowl Verde de Quinoa",
        descripcion: "Quinoa, aguacate, rúcula y vegetales frescos con aderezo sin gluten.",
        precio: "13,50 €",
        tags: ["sin-tacc", "vegano"],
      },
      {
        nombre: "Yogur con Fruta y Granola",
        descripcion: "Granola certificada sin gluten con yogur griego y frutas.",
        precio: "5,50 €",
        tags: ["sin-tacc"],
      },
    ],
  },
  {
    id: "ninos",
    emoji: "👶",
    titulo: "Menú Niños",
    subtitulo: "Hasta 12 años · Incluye bebida y postre",
    gradiente: "from-sky-600 to-blue-500",
    platos: [
      {
        nombre: "Mini Milanesa con Patatas",
        descripcion: "Milanesa de pollo tierna con patatas fritas y ketchup. El favorito de siempre.",
        precio: "9,50 €",
        tags: ["ninos"],
      },
      {
        nombre: "Macarrones con Salsa de Tomate",
        descripcion: "Pasta corta en salsa de tomate natural casera. Con queso rallado.",
        precio: "7,50 €",
        tags: ["ninos", "vegano"],
      },
      {
        nombre: "Hamburguesa Junior",
        descripcion: "Medallón de ternera en pan con lechuga, tomate y patatas fritas pequeñas.",
        precio: "10,00 €",
        tags: ["ninos"],
      },
      {
        nombre: "Nuggets de Pollo (6u)",
        descripcion: "Nuggets caseros de pechuga de pollo con salsa de maíz dulce.",
        precio: "8,50 €",
        tags: ["ninos"],
      },
      {
        nombre: "Chipitas Mini (x3)",
        descripcion: "Chipas pequeñas de almidón y queso. Perfectas para los más pequeños.",
        precio: "4,50 €",
        tags: ["ninos", "sin-tacc"],
      },
      {
        nombre: "Helado con Toppings",
        descripcion: "2 bolas de helado artesanal con topping a elegir: chocolate, caramelo o frutas.",
        precio: "5,00 €",
        tags: ["ninos", "sin-tacc"],
      },
    ],
  },
  {
    id: "postres",
    emoji: "🍓",
    titulo: "Postres & Frutas",
    subtitulo: "El broche dulce de cada comida",
    gradiente: "from-rose-600 to-pink-500",
    platos: [
      {
        nombre: "Ensalada de Frutas Tropicales",
        descripcion: "Mango, papaya, piña, plátano y fresas con zumo de naranja y menta fresca.",
        precio: "6,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Banana Split",
        descripcion: "Plátano con 3 bolas de helado artesanal, nata, chocolate caliente y nueces.",
        precio: "8,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Dulce de Leche Artesanal con Frutas",
        descripcion: "Dulce de leche argentino con rodajas de plátano y fresas. Simple y adictivo.",
        precio: "6,00 €",
        tags: ["sin-tacc", "recomendado"],
      },
      {
        nombre: "Mousse de Maracuyá",
        descripcion: "Mousse ligera y cremosa de maracuyá. Fresca y tropical.",
        precio: "6,50 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Mbaipy he´ê",
        descripcion: "Mazamorra dulce de maíz blanco con leche y azúcar. Postre guaraní tradicional.",
        precio: "5,50 €",
        tags: ["sin-tacc", "vegano"],
      },
      {
        nombre: "Tarta de la Casa",
        descripcion: "Tarta casera del día. Consultar disponibilidad con el personal.",
        precio: "5,50 €",
      },
      {
        nombre: "Tabla de Frutas de Temporada",
        descripcion: "Selección de frutas frescas del mercado. Perfecta para compartir.",
        precio: "8,00 €",
        tags: ["vegano", "sin-tacc"],
        nota: "Para 2 personas",
      },
    ],
  },
  {
    id: "bebidas",
    emoji: "☕",
    titulo: "Café & Bebidas",
    subtitulo: "Infusiones, zumos, refrescos y aguas",
    gradiente: "from-stone-700 to-stone-500",
    platos: [
      {
        nombre: "Café Solo",
        descripcion: "Espresso concentrado. Mezcla de especialidad tostada artesanalmente.",
        precio: "1,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Café con Leche",
        descripcion: "Espresso con leche caliente al gusto. El desayuno de Madrid.",
        precio: "1,80 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Cortado",
        descripcion: "Espresso con un toque de leche caliente.",
        precio: "1,60 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Capuchino",
        descripcion: "Espresso con leche vaporizada y espuma cremosa.",
        precio: "2,50 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Té e Infusiones",
        descripcion: "Variedad de tés y tisanas. Consultar selección disponible.",
        precio: "2,00 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Tereré (Yerba Mate Frío)",
        descripcion: "Mate frío con hierbas frescas al estilo paraguayo. Refrescante y energizante.",
        precio: "3,50 €",
        tags: ["vegano", "sin-tacc", "nuevo"],
      },
      {
        nombre: "Mate Caliente",
        descripcion: "Mate argentino servido en calabaza con bombilla. Auténtico y reconfortante.",
        precio: "3,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Zumo Natural",
        descripcion: "Naranja, pomelo o mixto. Exprimido al momento.",
        precio: "3,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Agua Mineral",
        descripcion: "Con o sin gas. 0,5L.",
        precio: "1,80 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Refrescos",
        descripcion: "Coca-Cola, Fanta, Nestea, Aquarius. Lata o botella.",
        precio: "2,50 €",
        tags: ["vegano", "sin-tacc"],
      },
    ],
  },
  {
    id: "copas",
    emoji: "🍷",
    titulo: "Copas & Bar",
    subtitulo: "Vinos, cervezas, cócteles y combinados",
    gradiente: "from-[#6B2D5E] to-[#9B4E8E]",
    platos: [
      {
        nombre: "Vino de la Casa (copa)",
        descripcion: "Tinto, blanco o rosado. Selección de bodegas españolas y argentinas.",
        precio: "3,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Malbec Argentino (copa)",
        descripcion: "Copa de Malbec de Mendoza. Cuerpo redondo con notas a frutos rojos y vainilla.",
        precio: "5,00 €",
        tags: ["vegano", "sin-tacc", "recomendado"],
      },
      {
        nombre: "Rioja Crianza (copa)",
        descripcion: "Copa de Rioja crianza española. Elegante y equilibrado.",
        precio: "5,00 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Caña de Cerveza",
        descripcion: "Cerveza española de barril. Fresca y ligera.",
        precio: "2,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Cerveza Artesanal",
        descripcion: "Selección de cervezas artesanales. Consultar disponibilidad.",
        precio: "4,50 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Fernet con Coca",
        descripcion: "El combinado más icónico de Argentina. Fernet Branca con Coca-Cola y hielo.",
        precio: "7,00 €",
        tags: ["recomendado", "nuevo"],
      },
      {
        nombre: "Aperol Spritz",
        descripcion: "Aperol, prosecco y un toque de soda con naranja. El aperitivo de moda.",
        precio: "8,00 €",
        tags: ["vegano"],
      },
      {
        nombre: "Tereré Cóctel",
        descripcion: "Tereré guaraní con ron blanco, lima y hierbas frescas. Creación exclusiva de Jade.",
        precio: "9,00 €",
        tags: ["nuevo", "recomendado"],
      },
      {
        nombre: "Gin Tonic",
        descripcion: "Gin premium con tónica artesanal y botanicals a elegir.",
        precio: "9,00 €",
        tags: ["sin-tacc"],
      },
      {
        nombre: "Caipirinha",
        descripcion: "Cachaça, lima, azúcar moreno y hielo picado. El clásico brasileño.",
        precio: "8,50 €",
        tags: ["vegano", "sin-tacc"],
      },
      {
        nombre: "Sangría de la Casa",
        descripcion: "Vino tinto con frutas de temporada, brandy y canela. Jarra grande disponible.",
        precio: "6,50 €",
        tags: ["vegano"],
        nota: "Jarra (1L): 16,00 €",
      },
      {
        nombre: "Chupito del Día",
        descripcion: "Pregunta al camarero por el chupito sorpresa del día.",
        precio: "2,00 €",
      },
    ],
  },
];

/* ── Tab de filtro ── */
const TABS = [
  { id: null,        label: "Todo",       emoji: "📋" },
  { id: "desayunos", label: "Desayunos",  emoji: "☀️" },
  { id: "paraguaya", label: "Paraguay",   emoji: "🇵🇾" },
  { id: "argentina", label: "Argentina",  emoji: "🇦🇷" },
  { id: "tapas",     label: "Tapas",      emoji: "🫒" },
  { id: "vegano",    label: "Vegano",     emoji: "🌱" },
  { id: "sin-tacc",  label: "Sin Gluten", emoji: "🌾" },
  { id: "ninos",     label: "Niños",      emoji: "👶" },
  { id: "postres",   label: "Postres",    emoji: "🍓" },
  { id: "bebidas",   label: "Café",       emoji: "☕" },
  { id: "copas",     label: "Bar",        emoji: "🍷" },
];

/* ── Plato card ── */
function PlatoCard({ plato }: { plato: Plato }) {
  return (
    <div className="group relative bg-white rounded-xl p-5 border border-gray-100 hover:border-[#74C69D]/40 hover:shadow-md transition-all duration-200">
      {/* Línea de acento verde */}
      <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-[#74C69D]/30 group-hover:bg-[#40916C] transition-colors" />

      <div className="pl-3">
        {/* Nombre + precio */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-playfair text-[#1B4332] font-semibold text-[15px] leading-snug group-hover:text-[#2D6A4F] transition-colors flex-1">
            {plato.nombre}
          </h4>
          <span className="font-playfair text-[#C9A84C] font-bold text-base shrink-0 tabular-nums">
            {plato.precio}
          </span>
        </div>

        {/* Descripción */}
        <p className="font-lato text-gray-500 text-[13px] leading-relaxed mb-3">
          {plato.descripcion}
        </p>

        {/* Tags + nota */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {plato.tags?.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-lato font-semibold px-2 py-0.5 rounded-full ${TAG_MAP[tag].cls}`}
            >
              {TAG_MAP[tag].label}
            </span>
          ))}
          {plato.nota && (
            <span className="text-[10px] font-lato text-gray-400 italic">
              · {plato.nota}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Sección de categoría ── */
function CategoriaSection({ cat }: { cat: Categoria }) {
  return (
    <section id={cat.id} className="scroll-mt-28">
      {/* Header de categoría */}
      <div className={`bg-gradient-to-r ${cat.gradiente} rounded-2xl p-6 mb-5 flex items-center gap-4 shadow-md`}>
        <span className="text-4xl drop-shadow-sm">{cat.emoji}</span>
        <div>
          <h2 className="font-playfair text-white text-2xl font-semibold leading-tight">
            {cat.titulo}
          </h2>
          <p className="font-lato text-white/65 text-[13px] mt-0.5 tracking-wide">
            {cat.subtitulo}
          </p>
        </div>
      </div>

      {/* Grid de platos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
        {cat.platos.map((plato) => (
          <PlatoCard key={plato.nombre} plato={plato} />
        ))}
      </div>
    </section>
  );
}

/* ── Página Carta ── */
export default function CartaPage() {
  const [tabActivo, setTabActivo] = useState<string | null>(null);

  const categoriasFiltradas = tabActivo
    ? CATEGORIAS.filter((c) => c.id === tabActivo)
    : CATEGORIAS;

  return (
    <div className="min-h-screen bg-[#F8F4ED]">

      {/* ── Header ── */}
      <div className="bg-gradient-to-b from-[#1B4332] via-[#1B4332] to-[#2D6A4F] pt-20 sm:pt-24 pb-10 sm:pb-16 px-4 sm:px-6 text-center text-white relative overflow-hidden">
        {/* Patrón sutil */}
        <div className="dot-pattern absolute inset-0 opacity-[0.04]" />
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-24 h-24 drop-shadow-xl">
              <Image
                src="/images/logo.png"
                alt="Bistro J&D"
                fill
                sizes="96px"
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A84C]/50" />
            <span className="font-lato text-[#C9A84C] text-[10px] tracking-[0.5em] uppercase">
              Bistro Jardín & Doux · Las Rozas, Madrid
            </span>
            <div className="h-px w-10 bg-[#C9A84C]/50" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-2">
            Nuestra Carta
          </h1>
          <p className="font-lato text-white/55 text-sm mt-2 mb-8">
            Desayunos · Cocinas del Cono Sur · Tapas · Café · Bar
          </p>

          {/* Leyenda */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[
              { cls: "bg-emerald-50/20 text-emerald-200 border border-emerald-500/30", label: "🌱 Vegano" },
              { cls: "bg-amber-50/20 text-amber-200 border border-amber-500/30", label: "🌾 Sin Gluten" },
              { cls: "bg-sky-50/20 text-sky-200 border border-sky-500/30", label: "👶 Niños" },
              { cls: "bg-[#FDF3DC]/10 text-amber-200 border border-amber-500/30", label: "★ Recomendado Chef" },
            ].map((b) => (
              <span key={b.label} className={`text-[10px] font-lato font-semibold px-3 py-1 rounded-full ${b.cls}`}>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tabs sticky ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#F8F4ED]/98 backdrop-blur-sm border-b border-[#2D6A4F]/15 shadow-sm">
        <div className="scroll-hide max-w-5xl mx-auto px-3 py-2.5 flex gap-1.5 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={String(t.id)}
              onClick={() => setTabActivo(t.id)}
              className={`shrink-0 flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl font-lato text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                tabActivo === t.id
                  ? "bg-[#1B4332] text-white shadow-md"
                  : "bg-white/80 text-[#1B4332] hover:bg-white hover:shadow-sm border border-[#74C69D]/20"
              }`}
            >
              <span className="text-sm sm:text-base leading-none">{t.emoji}</span>
              <span className="hidden xs:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Contenido ── */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-8 sm:py-10">
        {categoriasFiltradas.map((cat) => (
          <CategoriaSection key={cat.id} cat={cat} />
        ))}

        {/* Nota legal */}
        <div className="mt-4 p-5 bg-white rounded-2xl border border-gray-100 font-lato text-[12px] text-gray-400 text-center leading-relaxed shadow-sm">
          <p>
            Los precios incluyen IVA · Informamos alérgenos a solicitud del cliente
            <br />
            Los platos marcados <strong className="text-amber-700">Sin Gluten</strong> se preparan con ingredientes
            certificados libres de TACC en zona separada
            <br className="hidden md:block" />
            <strong className="text-[#40916C] mt-1 block">
              Reservas y consultas: +34 XXX XXX XXX
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
