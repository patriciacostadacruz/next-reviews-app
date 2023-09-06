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
        port: '1337',
        // from Strapi folder where images come from
        pathname: '/uploads/**',
      },
      toRemotePattern(process.env.CMS_IMAGE_PATTERN),
    ],
  },
};

function toRemotePattern(urlString) {
  const url = new URL(urlString);
  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
  };
}
