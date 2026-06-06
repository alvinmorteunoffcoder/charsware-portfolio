import { motion } from 'motion/react';
import { Film, Palette, Smartphone, Globe, Layout, Search, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 'video',
    title: 'Video Editing',
    description: 'Cinematic color grading, seamless transitions, and narrative-driven cuts that bring stories to life. From short-form content to full-scale productions.',
    icon: Film,
    color: 'from-zinc-400 to-zinc-600',
    features: ['Color Grading', 'VFX', 'Motion Graphics', 'Sound Design']
  },
  {
    id: 'graphics',
    title: 'Graphics Designing',
    description: 'Striking visual identities, comprehensive branding kits, and highly engaging digital illustrations crafted with meticulous precision.',
    icon: Palette,
    color: 'from-zinc-300 to-zinc-500',
    features: ['Brand Identity', 'UI/UX Elements', 'Print Media', 'Illustrations']
  },
  {
    id: 'app',
    title: 'App Developments',
    description: 'Robust, scalable, and responsive application architectures. Delivering seamless user experiences across mobile and web platforms.',
    icon: Smartphone,
    color: 'from-white to-zinc-400',
    features: ['React Native', 'Full-Stack', 'UI Integration', 'API Design']
  },
  {
    id: 'website',
    title: 'Website Designing',
    description: 'Modern, responsive, and performance-optimized websites built to elevate brand presence and drive user engagement.',
    icon: Globe,
    color: 'from-zinc-400 to-zinc-600',
    features: ['UI/UX Design', 'Responsive Layouts', 'Web Animations', 'CMS Integration']
  },
  {
    id: 'logo',
    title: 'Logo Designing',
    description: 'Minimalist, memorable, and impactful logo marks that define core brand identity and resonate with target audiences.',
    icon: Layout,
    color: 'from-zinc-300 to-zinc-500',
    features: ['Brand Marks', 'Typography', 'Color Theory', 'Scalable Vectors']
  },

  {
    id: 'digital-marketing',
    title: 'Digital Marketing (Meta AD/Google AD)',
    description: 'Targeted campaign management across Meta and Google Ads, maximizing ROI through precision targeting and analytics.',
    icon: BarChart,
    color: 'from-zinc-400 to-zinc-600',
    features: ['Meta Ads', 'Google Ads', 'Campaign Strategy', 'Conversion Tracking']
  }
];

export function Works() {
  return (
    <section id="works" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-500 text-xs font-medium uppercase tracking-widest max-w-2xl mx-auto"
          >
            A curated showcase of technical execution paired with aesthetic precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link to={`/works/${category.id}`} key={category.id} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
                  className="group relative bg-[#121212]/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm p-6 flex flex-col justify-end h-full hover:border-white/20 transition-colors"
                >
                  <div className="absolute top-6 left-6 text-[10px] text-zinc-600 font-mono">0{index + 1}</div>
                  {/* Glow effect behind card on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10 mt-12 md:mt-24">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-zinc-600" size={24} />
                    </div>
                    
                    <h3 className="text-xl font-light mb-2 text-white">
                      {category.title}
                    </h3>
                    
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 relative z-10">
                    <div className="h-px w-full bg-gradient-to-r from-zinc-700 to-transparent mb-4"></div>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-[10px] uppercase tracking-widest text-zinc-600">
                          {i > 0 && <span className="mx-2 text-zinc-800">/</span>}
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
