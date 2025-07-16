/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org', // For the IITH Insignia SVG
      'www.iith.ac.in',       // For the carousel images from IITH website
      'placehold.co',         // For any placeholder images you might use
      // Add any other domains you load images from here
    ],
  },
};

// Changed from module.exports = nextConfig; to export default nextConfig;
export default nextConfig;
