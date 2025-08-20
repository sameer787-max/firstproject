"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Lightning-fast ordering & delivery",
    img: "/Dhaamai/dhashbord.png",
  },
  {
    title: "Local taxes, fees & compliance ready",
    img: "/Dhaamai/progressbar.png",
  },
  {
    title: "AI-powered auto-dispatching",
    img: "/Dhaamai/growthchart.png",
  },
  {
    title: "Multi-location, multi-vendor support",
    img: "/Dhaamai/growthchart.png",
  },
  {
    title: "Fully white-labeled apps & domains",
    img: "/Dhaamai/loginscreen.png",
  },
  {
    title: "Customizable regional themes & content",
    img: "/Dhaamai/growthchart.png",
  },
];

export default function FeatureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full py-5 md:py16 px-6 md:px-12 bg-white text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-4xl text-gray-900 mb-4">
        Built for <span className="text-purple-600">Speed.</span> Designed for
        Global <span className="text-purple-600">Scale.</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Whether you're launching in New York, Berlin, or Mumbai, DhaamAi helps
        you dominate your hyperlocal market.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
              delay: i * 0.25,
            }}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition flex flex-col"
          >
            <div className="relative w-full h-40 md:h-48 lg:h-56 mb-4">
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-800 font-medium">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
