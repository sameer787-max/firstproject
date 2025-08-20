"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const data = [
  { label: "Customer Segmentation Guide", value: 10, color: "bg-purple-400" },
  { label: "Audience Targeting Strategies", value: 40, color: "bg-blue-600" },
  { label: "Effective Segmentation Insights", value: 20, color: "bg-orange-500" },
  { label: "Segmentation Basics for Success", value: 30, color: "bg-green-500" },
];

export default function CustomerCard() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        flex flex-col mb-3 justify-between
        p-[clamp(16px,2.5vw,28px)]
        rounded-2xl shadow-md  bg-white
        [width:clamp(280px,35vw,380px)]
        [height:clamp(280px,35vw,340px)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-700 font-medium flex items-center space-x-1 text-[clamp(14px,1.3vw,18px)]">
          <span>New customers</span>
          <span className="text-gray-400 cursor-pointer">ⓘ</span>
        </h3>
        <button className="text-gray-500 hover:text-gray-700 text-[clamp(16px,1.6vw,20px)]">➔</button>
      </div>

      {/* Number */}
      <div className="mt-2 text-[clamp(22px,2.5vw,34px)] font-bold text-gray-900">
        6543
      </div>

      {/* Progress bar */}
      <div className="flex w-full h-[clamp(10px,1.2vw,16px)] rounded-lg overflow-hidden mt-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.color}`}
            initial={{ width: 0 }}
            animate={inView ? { width: `${item.value}%` } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          />
        ))}
      </div>

      {/* Labels */}
      <div className="mt-4 space-y-3 flex-1 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <span className={`w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)] rounded-md ${item.color}`} />
              <span className="text-[clamp(12px,1.1vw,16px)] text-gray-700">
                {item.label}
              </span>
            </div>
            <span className="text-[clamp(12px,1.1vw,16px)] font-medium text-gray-600">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
