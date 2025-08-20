"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const tabs = {
  "Customer App": [
    "Seamless ordering experience",
    "Area or postal code-based delivery filtering",
    "Wallet, tips & loyalty",
  ],
  "Merchant App": [
    "Easy menu & inventory management",
    "Order acceptance & rejection",
    "Sales tracking & reports",
  ],
  "Admin Panel": [
    "Full control over vendors & users",
    "Advanced analytics dashboard",
    "Customizable platform settings",
  ],
};

export default function PlatformSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 }); // 👈 trigger only when 50% visible
  const activeTab = "Customer App";

  return (
    <section ref={ref} className="w-full py-8 md:py-16 px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl  text-gray-900">
          One <span className="text-[#7C43DF]">Platform.</span> Every App You{" "}
          Need.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          DhaamAi powers your delivery business with a robust, white-label
          ecosystem.
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-12 ">
        {/* Left side: Tabs + List */}
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-full p-1 w-fit mx-auto md:mx-0">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  tab === activeTab
                    ? "bg-[#7C43DF] text-white"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Features List */}
          <ul className="space-y-4 mt-6">
            {tabs[activeTab].map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
                className="flex items-center text-gray-800"
              >
                <span className="w-5 h-5 flex items-center justify-center bg-[#7C43DF] text-white rounded-full mr-3 text-sm">
                  ✓
                </span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right side: Mobile Image */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0., // still some delay after text
          }}
          className="relative  flex justify-center"
        >
          <div className=" relative top-1">
            <Image
              src="/Dhaamai/iphoneframe.png"
              alt="Mobile App" 
              width={260}
              height={450}
             
          

            />
            <img src="/Dhaamai/mobile.png" className="absolute h-92 top-16 left-3 w-57 " alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
