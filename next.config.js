/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com/media',
      },
      {
        protocol: 'https',
        hostname: 'gifdb.com/gif/'
      },
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com'
      },
      {
        protocol: 'https',
        hostname: 'tenor.com/view/'
      },
      {
        protocol: 'https',
        hostname: 'open.spotify.com'
      }
    ],
  },
}

module.exports = nextConfig
