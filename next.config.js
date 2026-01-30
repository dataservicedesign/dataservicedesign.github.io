const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: isProd ? 'export' : undefined,
    // basePath: '/',
    trailingSlash: true,
};
