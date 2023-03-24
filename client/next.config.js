const path = require('path');
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        },
      ],
    });

    // Resolve file paths for glb/gltf files
    config.resolve.modules.push(path.resolve('./public/assets'));

    return config;
  },
};