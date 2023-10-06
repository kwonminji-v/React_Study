const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};

/**
 * const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware("/api",{
      target:"http://localhost:8080/",
      changeOrigin:true,
    })
  )
}
 */