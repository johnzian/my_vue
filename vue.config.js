module.exports = {
    devServer: {
        proxy: {
            //代理配置
            "/api": {
                //target: 'http://192.168.1.209:10751/', // Dev环境
                //  target: 'http://192.168.1.238:10751/', // Test环境
                // target: 'http://192.168.1.215:10751/', // Rls环境
                // target: 'https://www.layui.com', // 正式环境
                //https://www.layui.com/demo/table/user/?page=1&limit=10
                target: "http://hn216.api.yesapi.cn/", // 正式环境
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => {
      // 配置包分析器，输入npm run analyz运行
      config.plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }

};
