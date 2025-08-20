"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CTAButton from "./CATButton";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSlack,
  FaPinterest,
  FaSnapchat,
  FaDropbox,
} from "react-icons/fa";
import { SiFigma, SiMailchimp } from "react-icons/si";

// Animation helper
const appear = (delay = 0, inView = false) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 },
  transition: { duration: 0.4, delay },
});

// --- Node Component (inside SVG) ---
const Node = ({ x, y, color, icon, delay = 0, size = 50, inView }) => (
  <motion.foreignObject
    {...appear(delay, inView)}
    x={x - size / 2}
    y={y - size / 2}
    width={size}
    height={size}
  >
    <div
      className="rounded-full bg-white shadow-md flex items-center justify-center"
      style={{
        width: size,
        height: size,
        color,
        fontSize: size * 0.4,
      }}
    >
      {icon}
    </div>
  </motion.foreignObject>
);

// --- Line Components ---
const StepLine = ({ from, to, delay = 0, inView }) => {
  const midX = (from.x + to.x) / 2;
  const points = `${from.x},${from.y} ${midX},${from.y} ${midX},${to.y} ${to.x},${to.y}`;
  return (
    <motion.polyline
      points={points}
      fill="none"
      stroke="#D1D5DB"
      strokeWidth={1.5}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: inView ? 1 : 0 }}
      transition={{ duration: 0.4, delay }}
    />
  );
};

const StraightLine = ({ from, to, delay = 0, inView }) => (
  <motion.line
    x1={from.x}
    y1={from.y}
    x2={to.x}
    y2={to.y}
    stroke="#D1D5DB"
    strokeWidth={1.5}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: inView ? 1 : 0 }}
    transition={{ duration: 0.4, delay }}
  />
);

export default function IntegrationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  // Brand icons
  const icons = {
    figma: { icon: <SiFigma />, color: "#F24E1E" },
    twitter: { icon: <FaTwitter />, color: "#1DA1F2" },
    pinterest: { icon: <FaPinterest />, color: "#BD081C" },
    dropbox: { icon: <FaDropbox />, color: "#0061FF" },
    slack: { icon: <FaSlack />, color: "#611F69" },
    instagram: { icon: <FaInstagram />, color: "#E4405F" },
    mailchimp: { icon: <SiMailchimp />, color: "#FFE01B" },
    facebook: { icon: <FaFacebook />, color: "#1877F2" },
    snapchat: { icon: <FaSnapchat />, color: "#FFFC00" },
  };

  // --- Positions (1000×500 virtual canvas) ---
  const center = { x: 500, y: 250 };

  const left3 = [
    { ...icons.figma, x: 300, y: 150, delay: 0.4 },
    { ...icons.twitter, x: 240, y: 250, delay: 0.6 },
    { ...icons.pinterest, x: 300, y: 350, delay: 0.8 },
  ];

  const right3 = [
    { ...icons.instagram, x: 720, y: 150, delay: 0.4 },
    { ...icons.mailchimp, x: 780, y: 250, delay: 0.6 },
    { ...icons.facebook, x: 720, y: 350, delay: 0.8 },
  ];

  const left2 = [
    { ...icons.dropbox, x: 150, y: 150, delay: 1.0 },
    { ...icons.slack, x: 150, y: 350, delay: 1.2 },
  ];

  const right2 = [
    { ...icons.snapchat, x: 850, y: 150, delay: 1.0 },
    { ...icons.slack, x: 850, y: 350, delay: 1.2 },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-gray-50 flex flex-col items-center py-6 sm:py-10"
    >
      <h5 className="text-sm sm:text-lg text-[#7C43DF] text-center mb-1 sm:mb-2">
        our primary integration
      </h5>
      <h1 className="text-2xl sm:text-4xl mt-2 text-center mb-2">
        Make productivity easier with
      </h1>
      <h1 className="text-2xl sm:text-4xl text-center text-[#7C43DF]">
        50+ integrations
      </h1>

      {/* SVG diagram (everything scales together) */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full max-w-[900px] h-auto my-6"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Lines */}
        {left3.map((n) => (
          <StepLine
            key={`c-l3-${n.color}`}
            from={center}
            to={n}
            delay={n.delay - 0.2}
            inView={inView}
          />
        ))}
        {right3.map((n) => (
          <StepLine
            key={`c-r3-${n.color}`}
            from={center}
            to={n}
            delay={n.delay - 0.2}
            inView={inView}
          />
        ))}
        <StraightLine
          from={left3[0]}
          to={left2[0]}
          delay={left2[0].delay - 0.2}
          inView={inView}
        />
        <StraightLine
          from={left3[2]}
          to={left2[1]}
          delay={left2[1].delay - 0.2}
          inView={inView}
        />
        <StraightLine
          from={right3[0]}
          to={right2[0]}
          delay={right2[0].delay - 0.2}
          inView={inView}
        />
        <StraightLine
          from={right3[2]}
          to={right2[1]}
          delay={right2[1].delay - 0.2}
          inView={inView}
        />

        {/* Central node */}
        <Node
          x={center.x}
          y={center.y}
          color="#7C3AED"
          icon={<span className="text-xl sm:text-3xl">D</span>}
          delay={0.2}
          size={70}
          inView={inView}
        />

        {/* Other nodes */}
        {left3.map((n, i) => (
          <Node key={`l3-${i}`} {...n} size={45} inView={inView} />
        ))}
        {right3.map((n, i) => (
          <Node key={`r3-${i}`} {...n} size={45} inView={inView} />
        ))}
        {left2.map((n, i) => (
          <Node key={`l2-${i}`} {...n} size={40} inView={inView} />
        ))}
        {right2.map((n, i) => (
          <Node key={`r2-${i}`} {...n} size={40} inView={inView} />
        ))}
      </svg>

      <div className="px-4 sm:px-6 max-w-xl sm:max-w-2xl text-center mt-3 sm:mt-4 text-sm sm:text-base">
        <p>
          Gain a competitive edge with our SEO optimization tools, ensuring your
          website
        </p>
        <p className="mb-3">
          ranks higher, attracts more visitors, and generates leads like never
          before
        </p>
      </div>

      <CTAButton variant="primary">See Integrations</CTAButton>
    </section>
  );
}
