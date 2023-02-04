/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/s3.amazonaws.com/**'
      }
    ]
  },
  env: {
    LIBRARY_BACKEND: 'https://library-flask-arj2160.vercel.app'
  }
};

module.exports = nextConfig;
