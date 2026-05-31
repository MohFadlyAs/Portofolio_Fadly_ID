import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Project {
  id?: string;
  title: string;
  category: string;
  imageUrl: string;
  tags: string[];
  description?: string;
}

export interface Activity {
  id?: string;
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl?: string;
}

interface PortfolioContextType {
  projects: Project[];
  activities: Activity[];
  loading: boolean;
}

import { ASSETS } from '@/src/constants/assets';

const REAL_PROJECTS: Project[] = [
  {
    title: "FashionNest Ecommerce App",
    category: "Desain UI/UX",
    imageUrl: ASSETS.PROJECTS.FASHION_APP,
    tags: ["Figma", "Riset Pengguna", "Aplikasi Mobile"],
    description: "Desain aplikasi mobile ecommerce menyeluruh dengan 20+ layar, fokus pada navigasi intuitif dan estetika modern."
  },
  {
    title: "Branding Kopi Aren Semut",
    category: "Desain Grafis",
    imageUrl: ASSETS.PROJECTS.KOPI_AREN,
    tags: ["Kemasan Produk", "Identitas Visual", "Pemasaran"],
    description: "Merancang identitas visual dan kemasan produk untuk meningkatkan daya tarik komersial dan visibilitas di pasar."
  },
  {
    title: "Fotografi Alam & Urban",
    category: "Phonegraphy",
    imageUrl: ASSETS.PROJECTS.PHOTOGRAPHY,
    tags: ["Komposisi", "Lightroom", "Harmoni Visual"],
    description: "Kumpulan karya fotografi mobile untuk melatih insting tata letak dan harmoni warna yang nyaman di mata pengguna."
  }
];

const REAL_ACTIVITIES: Activity[] = [
  {
    title: "Kanela Champion Series 2026",
    description: "Anggota Divisi Logistik untuk turnamen futsal regional GIGABYTE Telkom University. Mengelola kebutuhan teknis dan koordinasi vendor demi kelancaran operasional.",
    location: "Kabupaten Garut",
    date: "Februari 2026",
    imageUrl: ASSETS.ACTIVITIES.FUTSAL
  },
  {
    title: "Relawan Roadshow Goes To School",
    description: "Komunikator publik untuk Telkom University di wilayah Garut. Mensosialisasikan peluang pendidikan tinggi dan jalur beasiswa kepada siswa-siswi SMA.",
    location: "Garut, Jawa Barat",
    date: "Januari 2026",
    imageUrl: ASSETS.ACTIVITIES.ROADSHOW
  },
  {
    title: "Tim Dokumentasi - DNBS War Champion",
    description: "Melakukan peliputan kompetisi regional, membuat konten dokumentasi untuk kebutuhan branding dan publikasi media sosial.",
    location: "Bandung",
    date: "Desember 2024"
  },
  {
    title: "Sekretaris Umum - OP3M Multazam",
    description: "Mengelola alur administrasi untuk lebih dari 20 kegiatan santri, meningkatkan efisiensi pengarsipan hingga 30% melalui sistem yang diperbarui.",
    location: "Kota Bandung",
    date: "2020 - 2023",
    imageUrl: ASSETS.ACTIVITIES.ORGANISASI
  }
];

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(REAL_PROJECTS);
  const [activities, setActivities] = useState<Activity[]>(REAL_ACTIVITIES);
  const [loading, setLoading] = useState(true);

  // Here we would integrate real Firebase fetching
  // For now, we simulate a small delay to show loading states if needed
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PortfolioContext.Provider value={{ projects, activities, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
