const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8085,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/productEntry.js',
        cart: 'cart@http://localhost:8082/cartEntry.js',
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}