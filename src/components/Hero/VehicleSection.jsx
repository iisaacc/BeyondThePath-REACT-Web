import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useCart } from "../Cart/CartContext";

const images = [
  { src: "/stock/exterior/1.png", title: "Explore the mountain", features: ["4x4 Off-road", "Solar panel", "5 seats"] },
  { src: "/stock/interior/1.jpg", title: "Discover the beach", features: ["Indoor shower with hot water", "Toilet", "60L Water tank"] },
  { src: "/stock/interior/2.jpg", title: "Travel limitless", features: ["Led illumination", "Comfortable dining room", "Sleep 3"] },
];

const extras = [
  { src: "/stock/extras/surf.png", title: "Surf Equipment", price: "30/day", features: ["Surf Board", "Wetsuit included", "Optional lessons"] },
  { src: "/stock/extras/bbq.webp", title: "BBQ Set", price: "30", features: ["Mobile BBQ", "household items included", "Easy to clean"] },
  { src: "/stock/extras/tent.png", title: "Camping Set", price: "40", features: ["3-person tent", "Mattress included"] },
];

export default function VehicleSection() {
  const { addToCart } = useCart();
  const [index, setIndex] = useState(0);
  const [mainOpen, setMainOpen] = useState(false);
  const [openExtra, setOpenExtra] = useState(null);

  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);
  const next = () => setIndex((p) => (p + 1) % images.length);

  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md pb-10">
        Discover your vehicle
      </h2>

      {/* MAIN CARD (con layout para que cambie tamaño suavemente) */}
      <motion.div
        layout
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative w-[700px] md:w-[800px] h-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="relative">
          <img src={images[index].src} alt={images[index].title} className="w-full h-[400px] md:h-[500px] object-cover" />

          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white">
            <ChevronLeft />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white">
            <ChevronRight />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">{images[index].title}</h2>

          <button onClick={() => setMainOpen((s) => !s)} className="flex items-center mt-2 text-sm text-indigo-600 hover:underline">
            <Info className="w-4 h-4 mr-1" />
            {mainOpen ? "Hide details" : "Show more"}
          </button>

          <AnimatePresence initial={false}>
            {mainOpen && (
              <motion.div
                key={`main-details-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 overflow-hidden"
                style={{ overflow: "hidden" }}
              >
                <ul className="space-y-2 text-gray-600 text-sm">
                  {images[index].features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-indigo-600">•</span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md pt-8">Improve your experience</h2>

      {/* EXTRAS: cada tarjeta controla su AnimatePresence internamente */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl px-0 pt-6" items-start>
        {extras.map((extra, i) => (
          <motion.div
            key={`extra-card-${i}`}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col self-start"
            >
            <div className="relative">
              <img src={extra.src} alt={extra.title} className="w-full h-[250px] object-cover" />
            </div>

            <div className="p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{extra.title}</h3>
              <p className="text-gray-600 font-medium mt-1">${extra.price}</p>
            </div>

            <div className="p-4 pt-0 flex-1 flex flex-col">
              <button
                onClick={() => setOpenExtra((prev) => (prev === i ? null : i))}
                className="flex items-center mt-2 text-sm text-blue-600 hover:underline"
                >
                <Info className="w-4 h-4 mr-1" />
                {openExtra === i ? "Hide details" : "Show more"}
              </button>
                {console.log(openExtra)}

              {/* AnimatePresence individual por tarjeta */}
              <AnimatePresence initial={false}>
                {openExtra === i && (
                  <motion.div
                whileHover={{ scale: 1.03 }}
                initial={false}
                animate={{ height: openExtra === i ? "auto" : 0, opacity: openExtra === i ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 overflow-hidden"
                >
                {openExtra === i && (
                    <ul className="space-y-2 text-gray-600 text-sm">
                    {extra.features.map((f, j) => (
                        <li key={j} className="flex items-center">
                        <span className="mr-2 text-indigo-600">•</span> {f}
                        </li>
                    ))}
                    </ul>
                )}
                </motion.div>

                )}
              </AnimatePresence>

              <button
                onClick={() => addToCart({ id: i, title: extra.title, price: extra.price })}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition self-start"
              >
                Add to Cart
              </button>
              
            </div>
        </motion.div>
        ))}
      </div>
    </div>
  );
}
