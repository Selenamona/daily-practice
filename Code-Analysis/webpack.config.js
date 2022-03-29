const path = require("path"); // node 的路径模块
const HtmlWebpakPlugin = require("html-webpack-plugin"); // 用于 HTML 文件的创建
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 执行命令的当前目录地址
// /Users/yixin/Documents/MONA/daily-practice/Code-Analysis
console.log(__dirname, "__dirname");
module.exports = {
  // 入口文件
  entry: {
    app: path.resolve(__dirname, "/src/test1/main.js"),
    quickLru: path.resolve(__dirname, "src/quick-lru/main.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 输出位置
    publicPath: "/", // 指定资源文件引用的目录，见 index.html
    filename: "js/[name]/[name]-bundle.js" // 输出文件名称
  },
  mode: "development",
  plugins: [
    // new CleanWebpackPlugin(), // 清除之前打包文件
    new HtmlWebpakPlugin({
      template: path.resolve(__dirname, "/src/test1/index.html"),
      filename: "aaa.html",
      chunks: ["app"] // 与入口文件对应的文件名
    }),
    new HtmlWebpakPlugin({
      template: path.resolve(__dirname, "/src/quick-lru/index.html"),
      filename: "quick-lru/index.html",
      chunks: ["quickLru"] // 与入口文件对应的文件名
    })
  ],
  devServer: {
    static: {
      // 指定服务启动的静态页面目录
      directory: path.join(__dirname, "./dist")
    }
  }
};
