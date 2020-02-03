const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const content = require("./content");

module.exports = {
	mode: 'production',
	entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }, 
      {
        test: /\.pug/,
        use: [
          "file-loader?name=[name].html",
          "extract-loader",
          "html-loader",
          {
            loader: "pug-html-loader",
             options: {
              data: content
            }
          }
        ]
      }
	  ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};