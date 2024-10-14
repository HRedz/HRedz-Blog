/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,  // Enable React strict mode
    images: {
        unoptimized: true,    // Disable Next.js image optimization for static exports
    },
};

export default nextConfig;
