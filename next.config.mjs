/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solves transpilation errors with MUI
  transpilePackages: ["@mui/material", "@mui/system", "@mui/icons-material"],
  
  // Allow video files
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
