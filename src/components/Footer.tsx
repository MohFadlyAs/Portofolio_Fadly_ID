import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ingin membangun sesuatu <br />yang <span className="text-indigo-400">luar biasa bersama?</span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto">
            Saya selalu terbuka untuk kolaborasi, proyek freelance, atau sekadar ngobrol santai tentang UI/UX dan Web3.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:fadlyahmadsehabudin@gmail.com"
              className="flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20 w-full sm:w-auto text-center justify-center"
            >
              <Mail size={20} />
              Sapa Saya
            </a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/fadlystudio" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/moh-fadly-ahmad-sehabudin-1b9412290/" },
                { icon: <Instagram size={20} />, href: "https://instagram.com/m_fadli_as" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-all border border-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-medium">
        <p>© 2026 Moh Fadly Ahmad Sehabudin. Dibuat dengan antusiasme & AI Studio.</p>
        <div className="flex items-center gap-8 font-mono uppercase tracking-tighter">
          <span>Desainer UI/UX</span>
        </div>
      </div>
    </footer>
  );
}
