"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Fig Nelson",
    username: "@fignel_sooon",
    text: "DhaamAi's user-friendly dashboards have simplified our digital strategy management.",
    avatar: "/avatar1.png",
    social: "twitter",
  },
  {
    name: "Sadie Berlin",
    username: "@sadieberlin00",
    text: "DhaamAi has truly transformed our online presence. With its powerful analytics and seamless integration, we’ve gained invaluable insights.",
    avatar: "/avatar2.png",
    social: "instagram",
  },
  {
    name: "Amaya Locosta",
    username: "@amaylocosta",
    text: "We’ve gained invaluable insights and improved our SEO ranking, resulting in significant business growth.",
    avatar: "/avatar3.png",
    social: "facebook",
  },
  {
    name: "Maya Roy",
    username: "@mayaroy",
    text: "The customization options are endless. DhaamAi lets us localize for every region seamlessly.",
    avatar: "/avatar4.png",
    social: "twitter",
  },
];

const socialIcons = {
  twitter: <FaTwitter className="text-sky-500 w-5 h-5" />,
  instagram: <FaInstagram className="text-pink-500 w-5 h-5" />,
  facebook: <FaFacebook className="text-blue-600 w-5 h-5" />,
};

export default function TestimonialsCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000); // 4 seconds per card
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section
      className="relative w-full overflow-hidden text-center px-6 bg-gray-100 py-12 md:py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/websvg2.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#7C43DF] font-medium">Our Customers</p>
          <h2 className="text-3xl md:text-5xl text-gray-900 mt-2">
            See what our <br /> customers are saying
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          {isMobile ? (
            // Mobile: One card at a time
            <div className="relative h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full min-h-70 max-w-sm bg-white shadow-sm rounded-2xl p-6 border border-gray-100"
                >
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    <span className="font-semibold">Incredibly useful product</span>
                    <br />
                    {testimonials[index].text}
                  </p>
                  <div className="flex  items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonials[index].avatar}
                        alt={testimonials[index].name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-gray-900 font-medium">{testimonials[index].name}</p>
                        <p className="text-gray-500 text-sm">{testimonials[index].username}</p>
                      </div>
                    </div>
                    <div>{socialIcons[testimonials[index].social]}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            // Desktop: Infinite marquee
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="min-w-[300px] sm:min-w-[350px] bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-md transition"
                >
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    <span className="font-semibold">Incredibly useful product</span>
                    <br />
                    {t.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-gray-900 font-medium">{t.name}</p>
                        <p className="text-gray-500 text-sm">{t.username}</p>
                      </div>
                    </div>
                    <div>{socialIcons[t.social]}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#7C43DF] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-purple-700 transition">
            Follow us on Social Media
          </button>
        </div>
      </div>
    </section>
  );
}
