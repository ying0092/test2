module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test2/'
    : '/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'dist'
    : 'dist-dev',
  chainWebpack(config) {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}