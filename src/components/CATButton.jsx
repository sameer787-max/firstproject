"use client";

export default function CTAButton({
  children,
  variant = "primary",
  fullWidth = false,
}) {
  const base =
    "rounded-full font-medium transition-colors duration-200 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4";

  const widthClass = fullWidth ? "w-full sm:w-auto" : " w-50 sm:w-auto";

  if (variant === "primary") {
    return (
      <button
        className={`${base} ${widthClass} bg-[#7E3AF2] text-white hover:bg-[#692ddc]`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${base} ${widthClass} border text-gray-700 hover:bg-gray-100`}
    >
      {children}
    </button>
  );
}
