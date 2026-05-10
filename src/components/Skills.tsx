import { motion } from 'motion/react';
import { PenTool, Smartphone, Camera, Palette } from 'lucide-react';

const SKILLS = [
  {
    title: "Desain UI/UX",
    description: "Merancang antarmuka yang berpusat pada pengguna, riset, hingga prototipe di Figma.",
    icon: <Smartphone className="text-indigo-500" size={32} />
  },
  {
    title: "Desain Grafis",
    description: "Mengembangkan materi visual untuk kebutuhan promosi dan identitas brand.",
    icon: <Palette className="text-emerald-500" size={32} />
  },
  {
    title: "Fotografi",
    description: "Melatih kepekaan komposisi dan harmoni warna melalui lensa mobile photography.",
    icon: <Camera className="text-blue-500" size={32} />
  }
];

const TOOLS = [
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Canva", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
  { name: "CapCut", url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/CapCut_logo.svg" },
  { name: "Lightroom", url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" }
];

export default function Skills() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-indigo-600 font-mono text-sm font-bold uppercase mb-4 tracking-widest block">
            Keahlian Utama
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">
            Memecahkan masalah melalui <br />
            <span className="text-gradient">Logika Visual.</span>
          </h2>
          
          <div className="space-y-8">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:shadow-lg group-hover:border-indigo-100 transition-all">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-sm">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-16 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Digital Toolkit</h3>
          <div className="grid grid-cols-2 gap-6">
            {TOOLS.map((tool) => (
              <div 
                key={tool.name}
                className="p-6 bg-white rounded-2xl border border-slate-100 flex flex-col items-center gap-4 hover:shadow-md transition-all group"
              >
                <img 
                  src={tool.url} 
                  alt={tool.name} 
                  className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-sm font-semibold text-slate-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
