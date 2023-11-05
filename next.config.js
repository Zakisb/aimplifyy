const withNextIntl = require("next-intl/plugin")("./i18n.js");
module.exports = withNextIntl({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        __dirname: true,
      };
    }

    return config;
  },
});
