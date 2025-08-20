"use client";

import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, useInView } from "framer-motion";

const initialData = [
  { time: "10:00 AM", value: 10 },
  { time: "1:45 PM", value: 60 },
  { time: "6:00 PM", value: 50 },
  { time: "10:00 PM", value: 95 },
  { time: "1:00 AM", value: 120 },
];

export default function RevenueChart() {
  const [data, setData] = useState([{ time: "10:00 AM", value: 0 }]);
  const [revenue, setRevenue] = useState(0);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < initialData.length) {
        if (i === 0) {
          const first = initialData[0];
          const mid = { time: first.time, value: Math.round(first.value / 2) };
          setData((prev) => [...prev, mid]);
          setTimeout(() => {
            setData((prev) => [...prev, first]);
            setRevenue(first.value * 100);
          }, 250);
          i++;
          return;
        }
        setData((prev) => [...prev, initialData[i]]);
        setRevenue(initialData[i].value * 100);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="
    bg-white shadow-md rounded-xl   mt-8 md-mt-3  
    p-4
    [width:clamp(280px,20vw,320px)]   
    [height:clamp(180px,25vw,250px)]  
  "
>
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -10 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="text-sm font-medium text-gray-600"
  >
    Revenue
  </motion.h2>

  {/* Number */}
  <motion.span
    key={revenue}
    initial={{ opacity: 0, y: 8 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ type: "spring", stiffness: 80 }}
    className="block text-xl font-bold text-gray-900"
  >
    ${revenue.toLocaleString()}
  </motion.span>

  {/* Chart */}
  <div className="h-[70%] mt-3">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ left: 0, right: 0, top: 5, bottom: 5 }}
      >
        <XAxis dataKey="time" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip
          contentStyle={{
            color: "#7E3AF2",
            borderRadius: "8px",
            border: "none",
            background: "#f9fafb",
            fontSize: "12px",
          }}
          formatter={(value) => [`$${value}`, "Revenue"]}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#16a34a"
          strokeWidth={2}
          dot={{ r: 3, fill: "#16a34a" }}
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-in-out"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</motion.div>
  );
}
