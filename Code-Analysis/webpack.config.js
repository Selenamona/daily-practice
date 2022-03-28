const path = require("path"); // node 的路径模块
const HtmlWebpakPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 入口文件
  entry: {
    app: path.resolve(__dirname, "/src/test1/main.js"),
    quickLru: path.resolve(__dirname, "src/quick-lru/main.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 输出位置
    publicPath: "/my/", // 指定资源文件引用的目录，见 index.html
    filename: "js/[name]/[name]-bundle.js" // 输出文件名称
  },
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(), // 清除之前打包文件
    new HtmlWebpakPlugin({
      filename: "test1/index.html",
      chunks: ["app"]
    }),
    new HtmlWebpakPlugin({
      filename: "quick-lru/index.html",
      chunks: ["quickLru"]
    })
  ],
  devServer: {
    static: {
      // 指定服务启动的静态页面目录
      directory: path.join(__dirname, "dist")
    }
  }
};
