import { type ISourceOptions } from "@tsparticles/engine";

const baseMove = {
  enable: true,
  speed: 1,
};

export const particleOptions: ISourceOptions[] = [
  // 1️⃣ Network Classic
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 60, density: { enable: true } },
      color: { value: "#ffffff" },
      links: { enable: true, distance: 150, opacity: 0.2, width: 1 },
      move: baseMove,
      opacity: { value: 0.5 },
      size: { value: 2 },
    },
  },

  // 2️⃣ Soft Blue Glow
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 40 },
      color: { value: "#60a5fa" },
      move: baseMove,
      opacity: { value: 0.3 },
      size: { value: { min: 2, max: 6 } },
    },
  },

  // 3️⃣ Starfield
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 120 },
      color: { value: "#ffffff" },
      move: { ...baseMove, speed: { min: 0.1, max: 0.5 } },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 3 } },
    },
  },

  // 4️⃣ Purple Floating Orbs
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 30 },
      color: { value: "#a78bfa" },
      move: { ...baseMove, speed: { min: 0.4, max: 1.5 } },
      opacity: { value: 0.25 },
      size: { value: { min: 6, max: 20 } },
    },
  },

  // 5️⃣ Cyber Green Matrix Style
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 80 },
      color: { value: "#22c55e" },
      move: { ...baseMove, direction: "bottom", speed: 2 },
      opacity: { value: 0.4 },
      size: { value: 2 },
    },
  },

  // 6️⃣ Firefly Glow
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 50 },
      color: { value: "#facc15" },
      move: baseMove,
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: { enable: true, speed: 1 },
      },
      size: { value: 3 },
    },
  },

  // 7️⃣ Minimal Subtle Dots
  {
    particles: {
      number: { value: 40 },
      color: { value: ["#c7c7c7", "#888888", "#ffffff"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.6,
      },
      size: {
        value: { min: 2, max: 6 },
      },
      move: baseMove,
      links: {
        enable: false,
      },
    },
  },

  // 8️⃣ Neon Pink Glow
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 40 },
      color: { value: "#f472b6" },
      move: baseMove,
      opacity: { value: 0.3 },
      size: { value: { min: 3, max: 7 } },
    },
  },

  // 9️⃣ Interactive Repulse Network
  {
    background: { color: { value: "transparent" } },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 120 } },
    },
    particles: {
      number: { value: 70 },
      color: { value: "#ffffff" },
      links: { enable: true, distance: 140, opacity: 0.25 },
      move: baseMove,
      size: { value: 2 },
    },
  },

  // 🔟 Galaxy Soft Motion
  {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 100 },
      color: { value: "#93c5fd" },
      move: { ...baseMove, speed: { min: 0.1, max: 0.8 } },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
    },
  },
];

//   const options: ISourceOptions["particles"] = useMemo(
//     () => ({
//       background: {
//         color: { value: "transparent" }, // IMPORTANT for Next.js
//       },
//       fpsLimit: 60,
//       particles: {
//         number: { value: 60, density: { enable: true } },
//         color: { value: "#ffffff" },
//         links: {
//           enable: true,
//           distance: 150,
//           color: "#ffffff",
//           opacity: 0.2,
//           width: 1,
//         },
//         move: {
//           enable: true,
//           speed: 1,
//         },
//         opacity: { value: 0.5 },
//         size: { value: { min: 1, max: 3 } },
//       },
//       interactivity: {
//         events: {
//           onHover: { enable: true, mode: "repulse" },
//         },
//         modes: {
//           repulse: { distance: 120 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );

//   const option1: ISourceOptions = {
//     background: { color: { value: "transparent" } },
//     particles: {
//       number: { value: 30 },
//       color: { value: "#a78bfa" },
//       move: {
//         enable: true,
//         speed: 0.7,
//         direction: "top",
//       },
//       opacity: {
//         value: 0.2,
//       },
//       size: {
//         value: { min: 10, max: 30 },
//       },
//     },
//   };

//   const option3: ISourceOptions = {
//     background: { color: { value: "transparent" } },
//     particles: {
//       number: { value: 60 },
//       color: { value: "#ffffff" },
//       links: {
//         enable: true,
//         distance: 130,
//         opacity: 0.2,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 1,
//       },
//       size: { value: 2 },
//     },
//   };

//   const option2: ISourceOptions = {
//     background: { color: { value: "transparent" } },
//     fpsLimit: 60,
//     particles: {
//       number: { value: 40 },
//       color: { value: "#60a5fa" },
//       move: {
//         enable: true,
//         speed: 0.5,
//       },
//       opacity: {
//         value: 0.3,
//       },
//       size: {
//         value: { min: 2, max: 6 },
//       },
//     },
//   };
