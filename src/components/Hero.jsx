"use client";

import { motion } from "framer-motion";
import CTAButton from "./CATButton";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-center px-4 sm:px-6 mt-4 py-16 sm:py-20 md:py-28 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Dhaamai/websvg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
        backgroundPosition: "top center",
      }}
    >
      {/* Purple Glow */}
      <div className="absolute inset-0 flex justify-center">
   
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                duration: 0.25,
                ease: "easeOut",
              },
            },
          }}
        >
          {/* Heading (unchanged font styling) */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-5xl leading-snug text-gray-900"
          >
            Deliver <span className="text-[#7C43DF]">Fast.</span>{" "}
            Sell <span className="text-[#7C43DF]">Smart.</span>{" "}
            Scale <span className="text-[#7C43DF]">Global.</span>
          </motion.h1>

          {/* Subtext (unchanged font styling) */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-6 text-lg text-gray-600"
          >
            Launch your <span className="font-semibold">own branded hyperlocal</span>{" "}
            delivery platform with{" "}
            <span className="text-[#7E3AF2] font-semibold">AI-powered</span> apps
            for customers, merchants, and admins.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex items-center flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <CTAButton variant="secondary">Explore the Platform</CTAButton>
          <CTAButton variant="primary">Get a Free Demo</CTAButton>
        </div>
      </div>
    </section>
  );
}
