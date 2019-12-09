const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
        {
            test: /\.s[ac]ss|css$/i,
            exclude: /node_modules/,
            use: [                
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
        },
     ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};