/** @type {import('next').NextConfig} */
module.exports = {
  // cannot do static export to use Image next tag in ReviewPage
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        // used by Strapi
        // port: '1337',
        // from Strapi folder where images come from
        // pathname: '/uploads/**',
      },
    ],
  },
};
