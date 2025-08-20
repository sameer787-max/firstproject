"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevenueChart from "./RevenueChart"
import CustomerCard from "./CustomerCard"; // your previous customer card

// ✅ Reusable CountUp Hook
function useCountUp(end, inView, duration = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60); // 60 fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
    }
  }, [end, inView, duration]);

  return count;
}

export default function Dashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const completed = useCountUp(282, inView);
  const dispatched = useCountUp(29, inView);
  const pending = useCountUp(8, inView);
  const cancelled = useCountUp(10, inView);

  const activeStore = useCountUp(120, inView);
  const inactiveStore = useCountUp(8, inView);
  const openStore = useCountUp(112, inView);
  const closedStore = useCountUp(0, inView);

  return (
    <div
      ref={ref}
      className="p-6 bg-gray-50 min-h-screen w-full space-y-6"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
          Customise
        </button>
      </div>

      {/* Revenue Chart */}
    <RevenueChart></RevenueChart>

      {/* Orders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Completed", value: completed },
          { label: "Dispatched", value: dispatched },
          { label: "Pending", value: pending },
          { label: "Cancelled", value: cancelled },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-gray-900">{item.value}</div>
            <div className="text-gray-600 text-sm">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* New Customers Card */}
      <CustomerCard />

      {/* Stores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active store", value: activeStore },
          { label: "Inactive store", value: inactiveStore },
          { label: "Open store", value: openStore },
          { label: "Closed store", value: closedStore },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-gray-900">{item.value}</div>
            <div className="text-gray-600 text-sm">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
