import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export default function ProjectCard({ title, category, imageUrl, tags }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <button className="p-4 bg-white rounded-full text-indigo-600 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
            <ExternalLink size={24} />
          </button>
        </div>
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/20 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-mono font-medium px-2 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
