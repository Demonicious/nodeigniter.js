const { resolve } = require('path');

module.exports = {
    port: 80,
    static_route: '/static',
    paths: {
        views: resolve('./app/views'),
        models: resolve('./app/models'),
        controllers: resolve('./app/controllers'),
        libraries: resolve('./app/library'),
        configs: resolve('./app/config'),
        static: resolve('./static'),
    },
    reportRequests: true,
    environment: "DEVELOPMENT",
}