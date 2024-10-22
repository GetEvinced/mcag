/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/mcag",
    output: "export",
    reactStrictMode: true,
    images: {
      loader: 'akamai',
      unoptimized: true,
      path: '',
    }
};

export default nextConfig;
