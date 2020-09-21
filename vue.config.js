const path = require("path");

// TODO mpaas 包名
const PACKAGE_NAME = "10000100";

function resolve(dir) {
  return path.join(__dirname, dir);
}

let devserver;
// 代理
const proxyDevServer = {
  hot: true,
  open: true,
  overlay: true,
  proxy: {
    "/dev-api": {
      target: process.env.VUE_APP_TARGET_URL,
      changeOrigin: true,
      source: false,
      pathRewrite: {
        "^/dev-api": "/"
      }
    }
  }
};
// mock
const mockDevServer = {
  hot: true,
  open: true,
  overlay: true,
  // eslint-disable-next-line global-require
  before: require("./mock/mock-server")
};

if (process.env.NODE_ENV === "mock") {
  devserver = mockDevServer;
} else {
  devserver = proxyDevServer;
}

module.exports = {
  publicPath: process.env.VUE_APP_ENV === "production" ? "././" : "/",
  indexPath: "index.html",
  outputDir: `dist/${PACKAGE_NAME}/www`,
  devServer: devserver,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // eslint-disable-next-line no-param-reassign
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config.when(process.env.VUE_APP_ENV !== "production", _config =>
      _config.devtool("inline-source-map")
    );

    config.when(process.env.VUE_APP_ENV === "production", _config =>
      _config.devtool("cheap-source-map")
    );
  },
  lintOnSave: false
};
