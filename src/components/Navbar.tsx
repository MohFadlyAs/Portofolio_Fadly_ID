import { motion } from 'motion/react';
import { User, Layers, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Tentang', icon: <User size={18} />, href: '#about' },
    { name: 'Proyek', icon: <Layers size={18} />, href: '#projects' },
    { name: 'Aktivitas', icon: <Briefcase size={18} />, href: '#activities' },
    { name: 'Kontak', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-lg">
      <div className="glass-morphism rounded-full px-6 py-3 flex items-center justify-between gap-2 shadow-2xl shadow-indigo-100/50">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xs">
            FA
          </div>
        </div>
        
        <div className="flex items-center gap-1 md:gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all flex items-center gap-2 group"
            >
              {item.icon}
              <span className="text-xs font-semibold hidden md:block">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
