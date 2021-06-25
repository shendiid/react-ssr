const Path = require("path");
const NodeExternals = require("webpack-node-externals"); // 服务端运行webpack需要运行NodeExternals, 他的作用是将express这类node模块不被打包到js里。

module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "build"),
  },
  externals: [NodeExternals()],
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/react",
            [
              "@babel/env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
