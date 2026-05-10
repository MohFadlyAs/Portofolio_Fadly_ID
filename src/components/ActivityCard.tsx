import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ActivityCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl?: string;
  className?: string;
}

export default function ActivityCard({ 
  title, 
  description, 
  location, 
  date, 
  imageUrl,
  className 
}: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex gap-6 pb-12 last:pb-0",
        className
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-4 top-2 bottom-0 w-px bg-slate-200 group-last:bg-transparent" />
      
      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-100 transition-transform group-hover:scale-110">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-1">
        <div className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-indigo-400" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-emerald-400" />
                {location}
              </span>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {description}
          </p>

          {imageUrl && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 ring-1 ring-slate-100">
              <img 
                src={imageUrl} 
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )}

          <button className="text-sm font-semibold text-indigo-600 flex items-center gap-1.5 hover:gap-2 transition-all">
            Lihat Detail
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
