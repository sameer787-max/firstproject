"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


export default function OnboardingScreen() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <div className="h-90 mx-auto  w-full flex items-center justify-center bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-[420px] w-[270px] mx-auto flex flex-col bg-white rounded-3xl shadow-xl relative overflow-hidden"
      >
        {/* Top Status Bar */}
        <div className="flex justify-between flex-row  items-center px-4 py-2 text-xs text-gray-800">
          <span className="font-semibold">9:41</span>
          <div className="flex items-center space-x-1">
              <Image src="/Dhaamai/wifi.svg" alt="WiFi" width={14} height={14} />
            <Image src="/Dhaamai/network.svg" alt="WiFi" width={14} height={14} />
            <Image src="/Dhaamai/battery.svg" alt="Battery" width={10} height={10} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-0.5 flex-1 px-5 py-5">
          {/* Logo */}
          <div className="flex items-center space-x-2 mt-1">
            <Image src="/Dhaamai/Vector.svg" alt="Logo" width={80} height={50} />
           
          </div>

          {/* Illustration with animation */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-4"
          >
            <Image
              src="/Dhaamai/mobile.png"
              alt="Buy Grocery Illustration"
              width={180}
              height={70}
              priority
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-900">Buy Grocery</h2>
            <p className="text-gray-500 text-sm mt-2 px-2 leading-relaxed">
              Lorem ipsum dolor sit amet, sed diam
              nonumy
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex space-x-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#7E3AF2]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          {/* Continue Button */}
          <button className="mt-0.5 w-full bg-[#7E3AF2] text-white py-1 rounded-xl text-sm font-medium flex items-center justify-center space-x-1">
            <span>Continue</span>
            <span>→</span>
          </button>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          <div className="w-24 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </motion.div>
    </div>
  );
} 