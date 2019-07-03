const settings = require ('./settings');
let webdriver;

switch (settings.browser)
{
  case 'firefox':
    webdriver = require('./firefoxDriver').Build(settings);
    break;
  default:
    webdriver = require('./chromeDriver').Build(settings);
    break;
}

module.exports = webdriver;