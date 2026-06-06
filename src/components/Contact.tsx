import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 border-t border-white/5 pt-10 mt-16"
        >
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4 block">Communication</span>
              <h2 className="text-4xl font-extralight tracking-tight text-white mb-4">
                Let's Talk.
              </h2>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest max-w-sm">
                Open for new opportunities and collaborations.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Availability</span>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {/* Email Action */}
                <a 
                  href="mailto:alvinmorteunoff@gmail.com"
                  className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-white/5 transition-all"
                >
                  <Mail size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <span>EMAIL</span>
                  <ArrowRight size={12} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>

                {/* WhatsApp Action */}
                <a 
                  href="https://wa.me/9940261107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-zinc-200 transition-all"
                >
                  <MessageCircle size={14} />
                  <span>WHATSAPP CHAT</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
