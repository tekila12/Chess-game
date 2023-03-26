const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add file loader rule for glb/gltf files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'public/static/assets/',
            publicPath: '/_next/static/assets/',
          },
        },
      ],
    });

    // Resolve file paths for glb/gltf files
    config.resolve.modules.push(path.resolve('./public'));

    return config;
  },
};