const path = require('path');

//common webpack config shared by both webpack.confog.dev and webpack.config.prod
module.exports = { 
  entry: {
    main: './src/index.js', 
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
        exclude: /node_modules/, 
      },
      {
        test: /\.(svg|jpeg|gif|png)$/,
        use: { 
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        },
        exclude: /node_modules/, 
      }
    ]
  },
};