'use strict'

const path = require('path')
const localUrl = "http://XIQING"
module.exports = {
    devServer: {
        
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
          '/':{
            target:localUrl,
            changeOrigin:true,
            pathRewrite: {
              '^/': ''
            }
          }
        },

        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, 


        useEslint: true,

        showEslintErrorsInOverlay: false,

        devtool: 'cheap-module-eval-source-map',


        cacheBusting: true,

        cssSourceMap: true
  },

  build: {

    index: path.resolve(__dirname, '../dist/index.html'),


    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,

    devtool: '#source-map',


    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}