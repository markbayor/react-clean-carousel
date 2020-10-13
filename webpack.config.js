const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    target: "web",
    entry: {
      main: "./src/index.tsx",
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
      modules: ["src", "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [resolve(__dirname, "src")],
          use: ["babel-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    output: {
      globalObject: 'this',
      path: resolve(__dirname, "dist"),
      filename: "index.js",
      library: "react-clean-carousel-library",
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      "react": {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
      }
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      port: 9000,
      publicPath: "/dist",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('./index.html'),
      }),
    ]
  };
};
