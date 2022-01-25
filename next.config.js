module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '172.28.0.1'],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
};
