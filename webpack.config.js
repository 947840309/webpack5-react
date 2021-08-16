const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: path.join(__dirname, '/src/index.js'),
    mode: env.production ? 'production' : 'development',
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '纯净的模版',
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        // Images
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        // Fonts and SVGs
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
        // CSS, PostCSS, and Sass
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
  }
}