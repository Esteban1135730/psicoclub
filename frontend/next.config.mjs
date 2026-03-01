/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/planner", destination: "https://planner.psicoclub.com.co/login.php?return=true&", permanent: false },
      { source: "/nube", destination: "https://nube.psicoclub.com.co/index.php/login", permanent: false }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
