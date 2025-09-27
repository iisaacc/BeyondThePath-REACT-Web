import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ShieldCheck, Headset, LifeBuoy } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import VehicleSection from "./VehicleSection";
import BookDates from "./BookDates.jsx"

export default function Hero() {
    return(
        <main>
        <section id="main" className="h-screen relative flex items-center justify-center bg-gray-900 text-white">
           {/* Video de fondo */}
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover opacity-80"
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero-poster.jpg" // Opcional: imagen de respaldo
            >
              <source src="/stock/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>  
          {/* Texto encima */}
          <div className="relative text-center max-w-2xl px-4">
            <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Explore The Experience
            </h2>
            <p className="text-lg mb-6 drop-shadow">
              Drive off the beaten path and discover hidden gems with our 4x4 campers.
            </p>
            <a href="#book" className="px-6 py-3 bg-[#E8C155] hover:bg-indigo-700 text-black font-bold rounded-lg shadow-lg transition">
              Book Now
            </a>
          </div>
        </section>

         {/* The experience */}
        <section id="experience" className="relative h-screen overflow-hidden text-white">
          {/* Slider */}
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="absolute inset-0 w-full h-full z-0"
          >
            <SwiperSlide>
              <img
                src="/stock/views.jpg"
                alt="Camper adventure"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/stock/surf-equipment.jpg"
                alt="Surfing remote waves"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/stock/pickupbeach1.jpg"
                alt="Remote mountain view"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Overlay para que se lea bien */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Contenido */}
           <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl text-center px-6 mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                The Experience
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
                Beyond the Path’s goal is to bring you the perfect playground for your ultimate nomad adventure.
                <br /><br />
                It doesn’t matter whether you just want to relax in breathtaking spots with stunning views or chase the most remote waves on the east coast — you’ll be fully equipped for it.
                <br /><br />
                We provide you with a carefully crafted map highlighting everything you need: the best beaches, scenic viewpoints, safe places to camp with your 4x4, top surf spots, off-road routes, and essential services such as water refill stations and laundries.
              </p>
              <a
                href="#map"
                className="bg-yellow-500 hover:bg-indigo-700 text-black font-bold px-6 py-3 rounded-2xl shadow-lg inline-block"
              >
                Explore the Map
              </a>
              {/* CUADRO DE INFORMACIÓN */}
              <div className="bg-yellow-500 rounded-2xl shadow-xl flex flex-col md:flex-row justify-around items-center gap-6 px-8 py-6 mt-12">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-black" />
                  <span className="font-semibold text-black">National Roadside Assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <LifeBuoy className="w-8 h-8 text-black" />
                  <span className="font-semibold text-black">Comprehensive Insurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Headset className="w-8 h-8 text-black" />
                  <span className="font-semibold text-black">24/7 Customer Service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
         {/* Vehicles */}
        <section id="vehicles"   className="min-h-[175vh] pt-24 flex items-start justify-center bg-[url('./assets/desert-background.jpg')] bg-cover bg-center p-10">
          <VehicleSection />
        </section>

        {/* Essential Map */}
        <section
          id="map"
          className="min-h-screen flex flex-col items-start justify-start 
                    bg-[url('./assets/map.png')] bg-no-repeat bg-center bg-cover p-10"
        >
          <div className="p-10">
            <h2 className="text-4xl font-bold mb-10 text-black drop-shadow-lg">
              Essential Map – Your Adventure Companion
            </h2>

            <div className="grid grid-cols-1 gap-6 w-full max-w-xl pl-20">
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2">🚙 Off-road routes</h3>
                <p className="text-gray-700">
                  Discover local 4x4 tracks that take you beyond the highways into
                  hidden hinterland and coastal gems.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2">🌄 Viewpoints</h3>
                <p className="text-gray-700">
                  From Cape Byron Lighthouse to Minyon Falls, never miss the chance
                  to pause and take in epic panoramas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2">⛺ Sleeping places</h3>
                <p className="text-gray-700">
                  Safe and legal overnight spots, from national park campgrounds to
                  coastal caravan parks.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2">💧 Service & Water</h3>
                <p className="text-gray-700">
                  Stay self-sufficient with refill stations, service areas, and
                  local camper facilities.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2">🌿 Local tips</h3>
                <p className="text-gray-700">
                  Explore charming towns, unique culture, and practical stops that
                  make your adventure smoother.
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg italic text-black/80 max-w-3xl">
              ✨ In short: the Essential Map is your curated guide to experience
              Byron Bay with confidence — combining exploration, nature, and
              convenience in one place.
            </p>
          </div>
        </section>

        {/* Book Dates */}
        <section id="book" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 p-10">
          <BookDates />
        </section>

       
      </main>
    );
}