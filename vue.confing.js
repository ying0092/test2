module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test2/'
    : '/',
  baseUrl: process.env.NODE_ENV === 'production'
    ? './test2'
    : '/'
}