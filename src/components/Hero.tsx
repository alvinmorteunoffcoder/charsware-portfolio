import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] -z-10 mix-blend-screen mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-zinc-900/40 rounded-full blur-[150px] -z-10 mix-blend-screen mix-blend-normal" />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 flex justify-center"
        >
          <div className="flex items-center justify-center relative z-10 group">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Charsware Logo"
              className="w-48 sm:w-64 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback if logo not found
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = '<div class="w-32 h-16 sm:w-40 sm:h-20 border border-zinc-800 flex items-center justify-center bg-zinc-900/40 backdrop-blur-md overflow-hidden rounded-2xl"><span class="text-3xl font-serif italic text-white">CW</span></div>';
                }
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl font-extralight tracking-[-0.05em] leading-none mb-4 text-white"
        >
          CHARSWARE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-500 text-xs sm:text-sm uppercase tracking-[0.5em] font-light max-w-2xl balance px-4"
        >
          Simply Crafting
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex space-x-4"
        >
          <Link
            to="/works"
            className="px-8 py-3 rounded-full bg-zinc-100 text-zinc-950 font-medium hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View Works
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all duration-300"
          >
            Connect
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
