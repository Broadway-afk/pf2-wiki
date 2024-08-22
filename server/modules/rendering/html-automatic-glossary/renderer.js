const URL = require('url').URL

/* global WIKI */

module.exports = {
  init($, config) {
    WIKI.logger.info(`hello + ${$('body').text()} + ${JSON.stringify(config)}`)
  }
}
