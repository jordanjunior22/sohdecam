/** @type {import('next').NextConfig} */


const nextConfig = {
    output: "export",
}

module.exports = nextConfig

// next.config.js
const path = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/public/', // You can customize this path
          outputPath: 'static/images/', // This is where the images will be placed in the output directory
        },
      },
    });

    return config;
  },
};
