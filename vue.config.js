module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test2/'
    : '/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'dist'
    : 'dist-dev',
}