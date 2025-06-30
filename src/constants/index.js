// Anda perlu menyediakan ikon/gambar Anda sendiri di folder assets
// import { mobile, backend, creator, web } from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: "path/to/web.png" },
  { title: "React Native Developer", icon: "path/to/mobile.png" },
  { title: "Backend Developer", icon: "path/to/backend.png" },
  { title: "Content Creator", icon: "path/to/creator.png" },
];

const technologies = [
  // ... isi dengan teknologi yang Anda kuasai
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Perusahaan A",
    icon: "path/to/icon.png",
    iconBg: "#383E56",
    date: "Maret 2020 - April 2021",
    points: [
      "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
      "Berkolaborasi dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lain untuk menciptakan produk berkualitas tinggi.",
      "Menerapkan desain responsif dan memastikan kompatibilitas lintas browser.",
      "Berpartisipasi dalam tinjauan kode dan memberikan umpan balik yang membangun kepada pengembang lain.",
    ],
  },
  // ... tambahkan pengalaman lain
];

const testimonials = [
    // ... isi dengan testimoni
];

const projects = [
  {
    name: "Project Keren",
    description:
      "Deskripsi proyek Anda di sini. Jelaskan tantangan, solusi, dan teknologi yang digunakan.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "path/to/project-image.jpg",
    source_code_link: "https://github.com/",
  },
    // ... tambahkan proyek lain
];

export { services, technologies, experiences, testimonials, projects };
