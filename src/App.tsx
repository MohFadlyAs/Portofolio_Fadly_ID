import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import ActivityCard from './components/ActivityCard';
import Footer from './components/Footer';
import { usePortfolio } from './lib/PortfolioContext';
import { Layers, Briefcase } from 'lucide-react';

export default function App() {
  const { projects, activities, loading } = usePortfolio();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Skills />

        {/* Portfolio Section */}
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 font-mono text-sm font-bold uppercase mb-4 tracking-widest">
                <Layers size={20} />
                Hasil Karya
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Proyek <span className="text-gradient">Terpilih</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-500 leading-relaxed italic border-l-2 border-indigo-200 pl-6">
              "Desain bukan hanya tentang tampilan dan apa yang dirasakan. Desain adalah tentang bagaimana ia bekerja untuk penggunanya."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>

        {/* Activity Log Section */}
        <section id="activities" className="py-24 px-4 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 text-emerald-600 font-mono text-sm font-bold uppercase mb-4 tracking-widest">
                <Briefcase size={20} />
                Rekam Jejak
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Log <span className="text-gradient">Aktivitas</span>
              </h2>
              <p className="text-slate-500">Catatan perjalanan profesional dan kontribusi yang saya bangun selama ini.</p>
            </div>

            <div className="mt-12 space-y-8">
              {activities.map((activity, idx) => (
                <ActivityCard key={idx} {...activity} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
