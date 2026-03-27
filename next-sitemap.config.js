const { getAllPageUrls } = require('./src/utils/getPageUrls');

module.exports = {
  siteUrl: 'https://bbqpodspain.com',
  generateRobotsTxt: true,
  exclude: ['/**'], // Exclude all auto routes
  additionalPaths: async (config) => {
    const urls = getAllPageUrls(config.siteUrl);
    return urls.map((url) => ({ loc: url }));
  },
};