const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = defineConfig({
  // pages: {
  //   index: {
  //     entry: 'packages/index.ts',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  devServer: {
    port: 8090,
    host: 'localhost',
    open: true,
    hot: true,
  },
  configureWebpack: {
    name: 'vue3 + ts',
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')

    config.resolve.extensions
      .add('ts')
      .add('tsx')

    config.resolve.alias
      .set('@', resolve("src"))

    config.module
      .rule('ts')
      .use('ts-loader')

    // config.module
    //   .rule('ts')
    //   .include.add(resolve(__dirname, 'packages')).end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     return options
    //   })

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module.rule('less').oneOf('vue').use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          resolve(__dirname, './src/styles/theme.less'),
          // resolve(__dirname, './packages/theme/index.less')
        ]
      })

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config.optimization.runtimeChunk('single')
        }
      )
  }
})
