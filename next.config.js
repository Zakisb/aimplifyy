const withNextIntl = require("next-intl/plugin")("./i18n.js");
module.exports = withNextIntl({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": __dirname,
    };
  },
});
