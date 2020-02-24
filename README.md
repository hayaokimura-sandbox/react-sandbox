# React のプロジェクトのセットアップ

https://www.valentinog.com/blog/babel/ を参考にした

```
yarn init
yarn add -D webpack webpack-cli @babel/core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin html-loader webpack-dev-server
yarn add react react-dom
```

webpack.config.js

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```
