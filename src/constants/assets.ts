/**
 * Centralized Asset Management (Menggunakan Import)
 */

// 1. Import foto profil yang SUDAH PASTI ADA di foldernya
import profileImg from '../assets/profile/me.png';
import kopiArenImg from '../assets/projects/kopi-aren.png'; 
// 2. Kita berikan komentar (nonaktifkan) import gambar yang BELUM ADA
// Nanti hapus tanda "//" jika gambarnya sudah kamu masukkan ke folder
// import fashionAppImg from '../assets/projects/fashion-nest.png';
// import kopiArenImg from '../assets/projects/kopi-aren.png';
// import natureImg from '../assets/projects/nature.png';

// import futsalImg from '../assets/activities/kanela-series.jpg';
// import roadshowImg from '../assets/activities/roadshow.jpg';
// import documentationImg from '../assets/activities/documentation.jpg';
// import organizationImg from '../assets/activities/organization.jpg';

export const ASSETS = {
  // Foto Profil Utama (Akan langsung tampil)
  PROFILE: profileImg, 
  
  // Portofolio / Hasil Desain (Gunakan string kosong dulu sementara)
  PROJECTS: {
    FASHION_APP: "", // Nanti ganti jadi: fashionAppImg
    KOPI_AREN: kopiArenImg,   // Nanti ganti jadi: kopiArenImg
    PHOTOGRAPHY: "", // Nanti ganti jadi: natureImg
  },

  // Dokumentasi Kegiatan (Gunakan string kosong dulu sementara)
  ACTIVITIES: {
    FUTSAL: "",      // Nanti ganti jadi: futsalImg
    ROADSHOW: "",    // Nanti ganti jadi: roadshowImg
    DOKUMENTASI: "", // Nanti ganti jadi: documentationImg
    ORGANISASI: "",  // Nanti ganti jadi: organizationImg
  },
  
  // Logo Tools
  TOOLS: {
    FIGMA: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    CANVA: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
  }
};