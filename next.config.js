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
    MONGODB_CONNECTION_URL:
      'mongodb+srv://shreyas29:shreyas29@cluster0.xymuhzw.mongodb.net/test'
  }
};

module.exports = nextConfig;
