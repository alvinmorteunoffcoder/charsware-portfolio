import { motion } from 'motion/react';
import { Layers, PenTool, Globe, Database, Video, Film, Palette } from 'lucide-react';

const TOOLS = [
  { name: 'Capcut', icon: Video, tooltip: 'Quick, dynamic video editing for social media content.' },
  { name: 'Filmora', icon: Film, tooltip: 'Crafting engaging narrative flows and smooth transitions.' },
  { name: 'Canva', icon: Palette, tooltip: 'Rapid prototyping and social media graphic design.' },
  { name: 'Illustrator', icon: PenTool, tooltip: 'Creating scalable vector graphics and logos.' },
  { name: 'Photoshop', icon: Layers, tooltip: 'Advanced photo manipulation and raster graphics.' },
  { name: 'React / Next.js', icon: Globe, tooltip: 'Building interactive and performant web apps.' },
  { name: 'Node.js', icon: Database, tooltip: 'Developing scalable backend architectures.' },
];

export function Tools() {
  return (
    <section id="tools" className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[20rem] bg-zinc-800/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            The software architecture and creative arsenal behind the work.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4">Tools Mastery</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            {TOOLS.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className="flex items-center gap-4 sm:gap-6 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2 group cursor-default relative"
                  >
                    <Icon size={14} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[200px] bg-zinc-800 text-zinc-300 text-[10px] p-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20 text-center shadow-xl border border-white/5">
                      {tool.tooltip}
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-800"></div>
                    </div>
                  </motion.div>
                  {index < TOOLS.length - 1 && (
                    <div className="w-1 h-1 rounded-full bg-zinc-800 hidden sm:block"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
