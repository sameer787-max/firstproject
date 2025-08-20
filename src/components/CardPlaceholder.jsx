"use client";

export default function CardPlaceholder({ title }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <p className="text-gray-500">{title}</p>
    </div>
  );
}
