import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Link as LinkIcon, Image as ImageIcon, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function WorkDetailPage() {
  const { id } = useParams();

  // In the future, you can fetch specific files/data based on the 'id'
  const categoryTitle = id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Work';

  // Determine which sections to show based on the specific work category requested
  const hasLocalVideos = id === 'video';
  const hasVideoLinks = id === 'video';
  const hasText = id === 'digital-marketing';

  // --- INDIVIDUAL PHOTO GALLERIES ---
  // INSTRUCTION: Paste your local file paths here for each category.
  // For example: Place your images in the "public" folder (e.g., public/works/graphics-1.jpg)
  // and set the img value below to "/works/graphics-1.jpg"
  const categoryGalleries: Record<string, { img: string, title: string }[]> = {
    'graphics': [
      { img: '/Images/Menu Digital Displays1.png', title: 'Graphics Work 1' },
      { img: '/Images/Menu Digital Displays2.png', title: 'Graphics Work 2' },
      { img: '/Images/Menu Digital Displays3.png', title: 'Graphics Work 3' },
      { img: '/Images/Organizational Event Poster.png', title: 'Graphics Work 4' },
      { img: '/Images/ReelsCovers.png', title: 'Graphics Work 5' },
      { img: '/Images/Story_Posts.png', title: 'Graphics Work 6' },
      { img: '/Images/Visiting_cards.png', title: 'Graphics Work 7' },
      { img: '/Images/Visiting_cards_xendral.png', title: 'Graphics Work 8' },
      { img: '/Images/YT Thumbnails.png', title: 'Graphics Work 9' },
      { img: '/Images/cafe_menu_design.png', title: 'Graphics Work 10' },
    ],
    'app': [
      { img: '/Images/memorythings.jpg', title: 'Application 1' },
      { img: '/Images/application1.jpg', title: 'App UI Design 1' },
      { img: '/Images/application2(1).jpg', title: 'App UI Design 2' },
      { img: '/Images/application2(2).jpg', title: 'App UI Design 3' },
      { img: '/Images/application2(3).jpg', title: 'App UI Design 4' },
      { img: '/Images/BizLocateSaas.png', title: 'BizLocate SaaS' },
      { img: '/Images/BusinessFinderPage_BizLocateSaas.png', title: 'Business Finder Page' },
    ],
    'website': [
      { img: '/Images/Bright_reality _website.png', title: 'Website Design 1' },
      { img: '/Images/BizLocateSaas.png', title: 'Website Design 2' },
      { img: '/Images/BusinessFinderPage_BizLocateSaas.png', title: 'Website Design 3' },
    ],
    'logo': [
      { img: '/Images/LogowBG.png', title: 'Logo Design 1' },
      { img: '/Images/LOGO.png', title: 'Logo Design 2' },
    ]
  };

  const currentGallery = id ? categoryGalleries[id] : undefined;
  const hasPhotos = !!currentGallery && currentGallery.length > 0;

  // Framer Motion variants for 3D staggered revealing
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatingItem = {
    hidden: { opacity: 0, y: 100, rotateX: -20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1
      }
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen max-w-7xl mx-auto" style={{ perspective: '1200px' }}>
      <Link to="/works" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12">
        <ArrowLeft size={16} />
        <span className="text-xs uppercase tracking-widest">Back to Works</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extralight text-white mb-6">
          {categoryTitle}
        </h1>
        <p className="text-zinc-400 max-w-2xl mb-16">
          This is a dedicated space for showcasing My {categoryTitle.toLowerCase()} files and projects.
        </p>

        {/* Video Links Section (Placed first as requested) */}
        {hasVideoLinks && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <LinkIcon className="text-zinc-500" size={20} />
              <h2 className="text-2xl font-light text-white">Video Links</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
              {/* Instagram Reel 1 */}
              <motion.div variants={floatingItem} className="w-full h-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/10 transition-colors backdrop-blur-md transform-gpu flex flex-col group relative" style={{ transformStyle: 'preserve-3d' }}>
                <a href="https://www.instagram.com/reel/DOSrJCzkm7l/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block cursor-pointer"><span className="sr-only">View Instagram Reel</span></a>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex-shrink-0 flex items-center justify-center pointer-events-none">
                  <iframe className="w-full h-full" src="https://www.instagram.com/reel/DOSrJCzkm7l/embed/?hidecaption=1" title="Instagram Reel 1" frameBorder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center pointer-events-none">
                  <h3 className="text-xl text-white font-medium mb-2">Instagram Reel 1</h3>
                  <p className="text-zinc-400 text-sm">A fast-paced, high-energy edit for a brand.</p>
                </div>
              </motion.div>

              {/* Instagram Reel 2 */}
              <motion.div variants={floatingItem} className="w-full h-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/10 transition-colors backdrop-blur-md transform-gpu flex flex-col group relative" style={{ transformStyle: 'preserve-3d' }}>
                <a href="https://www.instagram.com/reel/DOV-j7SktSo/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block cursor-pointer"><span className="sr-only">View Instagram Reel</span></a>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex-shrink-0 flex items-center justify-center pointer-events-none">
                  <iframe className="w-full h-full" src="https://www.instagram.com/reel/DOV-j7SktSo/embed/?hidecaption=1" title="Instagram Reel 2" frameBorder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center pointer-events-none">
                  <h3 className="text-xl text-white font-medium mb-2">Instagram Reel 2</h3>
                  <p className="text-zinc-400 text-sm">A fast-paced, high-energy edit for a brand.</p>
                </div>
              </motion.div>

              {/* Instagram Reel 3 */}
              <motion.div variants={floatingItem} className="w-full h-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/10 transition-colors backdrop-blur-md transform-gpu flex flex-col group relative" style={{ transformStyle: 'preserve-3d' }}>
                <a href="https://www.instagram.com/reel/DVloAiLiZIF/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block cursor-pointer"><span className="sr-only">View Instagram Reel</span></a>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex-shrink-0 flex items-center justify-center pointer-events-none">
                  <iframe className="w-full h-full" src="https://www.instagram.com/reel/DVloAiLiZIF/embed/?hidecaption=1" title="Instagram Reel 3" frameBorder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center pointer-events-none">
                  <h3 className="text-xl text-white font-medium mb-2">Instagram Reel 3</h3>
                  <p className="text-zinc-400 text-sm">A fast-paced, high-energy edit for a brand.</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* YouTube Video 1 */}
              <motion.div variants={floatingItem} className="w-full h-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/10 transition-colors backdrop-blur-md transform-gpu flex flex-col group relative" style={{ transformStyle: 'preserve-3d' }}>
                <a href="https://www.youtube.com/watch?v=8XctktkBHpA" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block cursor-pointer"><span className="sr-only">View YouTube Video</span></a>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-video bg-black overflow-hidden flex-shrink-0 flex items-center justify-center pointer-events-none">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/8XctktkBHpA?modestbranding=1&rel=0&controls=0&showinfo=0" title="YouTube video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center pointer-events-none">
                  <h3 className="text-xl text-white font-medium mb-2">YouTube Video 1</h3>
                  <p className="text-zinc-400 text-sm">Long-form content editing for YouTube.</p>
                </div>
              </motion.div>

              {/* YouTube Video 2 */}
              <motion.div variants={floatingItem} className="w-full h-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/10 transition-colors backdrop-blur-md transform-gpu flex flex-col group relative" style={{ transformStyle: 'preserve-3d' }}>
                <a href="https://www.youtube.com/watch?v=l9-dIC55klU" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block cursor-pointer"><span className="sr-only">View YouTube Video</span></a>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-video bg-black overflow-hidden flex-shrink-0 flex items-center justify-center pointer-events-none">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/l9-dIC55klU?modestbranding=1&rel=0&controls=0&showinfo=0" title="YouTube video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center pointer-events-none">
                  <h3 className="text-xl text-white font-medium mb-2">YouTube Video 2</h3>
                  <p className="text-zinc-400 text-sm">Long-form content editing for YouTube.</p>
                </div>
              </motion.div>

              {/* YouTube Video 3 */}
              <motion.div variants={floatingItem} className="w-full h-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/10 transition-colors backdrop-blur-md transform-gpu flex flex-col group relative" style={{ transformStyle: 'preserve-3d' }}>
                <a href="https://www.youtube.com/watch?v=96gcJnWlamE" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block cursor-pointer"><span className="sr-only">View YouTube Video</span></a>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-video bg-black overflow-hidden flex-shrink-0 flex items-center justify-center pointer-events-none">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/96gcJnWlamE?modestbranding=1&rel=0&controls=0&showinfo=0" title="YouTube video 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center pointer-events-none">
                  <h3 className="text-xl text-white font-medium mb-2">YouTube Video 3</h3>
                  <p className="text-zinc-400 text-sm">Long-form content editing for YouTube.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        )}

        {/* Video Showcase Section */}
        {hasLocalVideos && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <Play className="text-zinc-500" size={20} />
              <h2 className="text-2xl font-light text-white">Video Showcase</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                { title: 'Corporate Reel', desc: 'Sleek transitions and beat-synced cuts.', file: 'Video1.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video2.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video3.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video4.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video5.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video6.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video7.mp4' },
                { title: 'Corporate Reel', desc: 'Professional and clean presentation.', file: 'Video8.mp4' }
              ].map((video, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <motion.div
                    variants={floatingItem}
                    className="w-full bg-[#0a0a0a] rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-500 backdrop-blur-md transform-gpu group relative flex items-center justify-center"
                  >
                    {/* Decorative glow behind video */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Un-cropped video */}
                    <video
                      src={`/videos/${video.file}`}
                      controls
                      className="w-full h-auto object-contain max-h-[70vh] relative z-10"
                    />
                  </motion.div>
                  <div className="px-2">
                    <h3 className="text-xl text-white font-medium">{video.title}</h3>
                    <p className="text-zinc-400 text-sm">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Photo Gallery Section */}
        {hasPhotos && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <ImageIcon className="text-zinc-500" size={20} />
              <h2 className="text-2xl font-light text-white">Photo Gallery</h2>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              {currentGallery?.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.img} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block break-inside-avoid mb-8"
                >
                  <motion.div
                    variants={floatingItem}
                    whileHover={{ y: -10, scale: 1.02, rotateX: 5 }}
                    className="w-full bg-zinc-900 rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl cursor-pointer transform-gpu relative group"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                      <p className="text-white font-medium text-lg">{item.title}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Text Fields Section (For Digital Marketing) */}
        {hasText && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <FileText className="text-zinc-500" size={20} />
              <h2 className="text-2xl font-light text-white">Campaign Details</h2>
            </div>
            
            <div className="mb-10 max-w-2xl">
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Professional Meta Ad Campaign Developer & Digital Marketer. <br/>
                Focused on scaling growth, maximizing ROI, and delivering data-driven results.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                { title: 'Online Course Meta Ads Funnel', kpi: '300% ROAS | 40% Lower CPA', body: 'Engineered an end-to-end Meta Ads funnel targeting high-intent audiences for a course-selling platform. By leveraging dynamic video creatives, lookalike audiences, and strategic retargeting of abandoned checkouts, we significantly lowered the Cost Per Acquisition (CPA) and maximized enrollment volume.' },
                { title: 'Real Estate Lead Generation Pipeline', kpi: '200+ Qualified Leads | 35% Conversion Rate', body: 'Developed highly localized Meta Ads campaigns for real estate clients to generate qualified buyer and seller leads. Utilizing native lead generation forms and carousel ads featuring premium listings, we built a predictable pipeline of high-quality prospects while strictly minimizing unqualified clicks.' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={floatingItem}
                  className="w-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 p-8 flex flex-col hover:bg-zinc-900/60 hover:border-white/20 transition-all duration-300 shadow-xl transform-gpu relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700 group-hover:bg-white transition-colors" />
                  <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                  <span className="text-xs font-mono text-zinc-400 mb-6 bg-black/50 w-fit px-3 py-1 rounded">{item.kpi}</span>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-4xl">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
}
