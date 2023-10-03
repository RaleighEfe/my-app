/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// const path = require("path");

// module.exports = {
//   // ...other Next.js config options...
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//       };
//     }

//     config.module.rules.push({
//       test: /\.(woff|woff2)$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "/_next/static/fonts",
//           outputPath: "static/fonts",
//         },
//       },
//     });

//     return config;
//   },
// };
