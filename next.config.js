module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'bonsay_api'],
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
