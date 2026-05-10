/**
 * Centralized Asset Management
 * Ganti string path di bawah ini sesuai dengan nama file yang Anda upload ke folder /public/assets/
 */

export const ASSETS = {
  // Foto Profil Utama
  PROFILE: "/assets/profile/me.png", 
  
  // Portofolio / Hasil Desain
  PROJECTS: {
    FASHION_APP: "/assets/projects/fashion-nest.png",
    KOPI_AREN: "/assets/projects/kopi-aren.png",
    PHOTOGRAPHY: "/assets/projects/nature.png",
  },

  // Dokumentasi Kegiatan
  ACTIVITIES: {
    FUTSAL: "/assets/activities/kanela-series.jpg",
    ROADSHOW: "/assets/activities/roadshow.jpg",
    DOKUMENTASI: "/assets/activities/documentation.jpg",
    ORGANISASI: "/assets/activities/organization.jpg",
  },
  
  // Logo Tools (Jika ingin menggunakan file lokal)
  TOOLS: {
    FIGMA: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    CANVA: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
  }
};
