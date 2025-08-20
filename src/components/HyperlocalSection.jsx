"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Farmers Markets & Organic Grocers",
    description:
      "Deliver fresh, local produce to customers with real-time tracking and custom storefronts.",
  },
  {
    title: "Restaurants, Diners & Ghost Kitchens",
    description:
      "Streamline orders and dispatch with branded food delivery apps built for speed and scale.",
  },
  {
    title: "Independent Pharmacies",
    description:
      "Enable secure, scheduled deliveries of essential health products with compliance-ready tools.",
  },
  {
    title: "Quick Commerce Startups",
    description:
      "Launch your 10-minute delivery brand with AI-powered routing and instant checkout flows.",
  },
  {
    title: "Local Convenience & Retail Stores",
    description:
      "Digitize your store with an online presence, fast delivery, and flexible payment options.",
  },
  {
    title: "On-Demand Delivery Networks",
    description:
      "Power your fleet with smart dispatch, multi-vendor support, and white-label control.",
  },
];

export default function HyperlocalSection() {
  return (
    <section className="w-full  py-8 md:py-16 px-6 md:px-12 bg-purple-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-5xl md:text-4xl  text-gray-900">
          Built for the <span className="text-[#7C43DF]">Hyperlocal</span>{" "}
          Economy
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Whether you're in food, essentials, or niche commerce —{" "}
          <span className="font-semibold italic text-[#7C43DF]">DhaamAi</span>{" "}
          supports your market.
        </p>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-6 px-6 py-3 bg-[#7C43DF] text-white rounded-full font-medium shadow-md hover:bg-purple-700 transition"
        >
          Get a Free Demo
        </motion.button>
      </motion.div >

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 overflow-auto sm:overflow-hidden  sm:h-[500px]  h-[40vh] pb-5  md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-sm p-8"
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-start space-x-4"
          >
            {/* Icon placeholder */}
            <div className="w-12 h-12 flex items-center justify-center bg-purple-50 rounded-xl text-[#7C43DF]">
             
            </div>
            {/* Text */}
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
