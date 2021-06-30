const Path = require("path");
const NodeExternals = require("webpack-node-externals"); // 服务端运行webpack需要运行NodeExternals, 他的作用是将express这类node模块不被打包到js里。
const { merge } = require("webpack-merge");
const config = require("./webpack.base.js");
const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
      filename: 'bundle.js',
      path: Path.resolve(__dirname, 'build')
  },
  externals: [NodeExternals()],
}
module.exports = merge(config, serverConfig);
