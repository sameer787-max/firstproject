"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function FreeTrialSection() {
  return (
    <section
      className="relative w-full py-8 md:py-28 bg-white"
      style={{
        backgroundImage: "url('/Dhaamai/websvg2.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row mt-5 items-center justify-between gap-12">
        {/* Left Side */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-[#7C43DF] font-medium mb-2">Start building today!</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Start your 7-day free trial
          </h2>
          <p className="text-gray-600">Experience the DhaamAi today!</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[500px] flex flex-col items-center md:items-start">
          {/* Email + Button */}
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="name@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 outline-none text-gray-700 shadow-sm"
            />
            <button className="bg-[#7C43DF] hover:bg-purple-700 transition text-white rounded-full px-6 py-3 font-medium text-sm sm:text-base md:text-lg shadow-md">
              Get Instant Access
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-[#7C43DF] w-5 h-5" />
              <span className="text-sm">Free 7-day trial</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-[#7C43DF] w-5 h-5" />
              <span className="text-sm">No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
