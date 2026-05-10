import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { ASSETS } from '@/src/constants/assets';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono font-medium tracking-wider text-indigo-600 border border-indigo-200 rounded-full bg-indigo-50/50">
            TERSEDIA UNTUK PROYEK
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[#666da6]">
            Moh <span className="text-gradient">Fadly</span> Ahmad <br />
            Sehabudin
          </h1>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-600 mb-10 leading-relaxed">
            Seorang Desainer UI/UX yang berdedikasi untuk menciptakan pengalaman digital yang intuitif dan bermakna. 
            Saya senang mengubah tantangan kompleks menjadi solusi visual yang elegan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all w-full sm:w-auto justify-center"
            >
              Unduh CV
              <Download size={18} />
            </motion.button>
            
            <a 
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-medium hover:border-indigo-400 transition-all w-full sm:w-auto justify-center"
            >
              Lihat Proyek
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
            {/* Geometric accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-3xl rotate-12 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/10 rounded-full -z-10" />
            
            {/* The main image frame */}
            <div className="w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-slate-200">
              <img 
                src={ASSETS.PROFILE} 
                alt="Moh Fadly Ahmad Sehabudin"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Stats or Details */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-0 md:right-4 glass-morphism p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-indigo-100"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <span className="text-xs font-bold">20+</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Proyek</p>
                <p className="text-sm font-bold text-slate-800">Selesai</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
