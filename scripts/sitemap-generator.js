import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Daftar rute Anda
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#about', changefreq: 'monthly', priority: 0.8 },
  { url: '/#work', changefreq: 'monthly', priority: 0.8 },
  { url: '/#contact', changefreq: 'monthly', priority: 0.8 },
  // Tambahkan rute lain jika ada
];

// Lokasi output sitemap
const sitemapPath = resolve(process.cwd(), 'dist', 'sitemap.xml');
const sitemapStream = new SitemapStream({ hostname: 'https://www.yourdomain.com' }); // Ganti dengan domain Anda

const generateSitemap = async () => {
  try {
    const writeStream = createWriteStream(sitemapPath);
    sitemapStream.pipe(writeStream);
    
    links.forEach(link => sitemapStream.write(link));
    sitemapStream.end();

    await streamToPromise(sitemapStream);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
