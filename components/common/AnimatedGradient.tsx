"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#0f172a] to-[#020617] animate-gradient" />
    </div>
  );
}
