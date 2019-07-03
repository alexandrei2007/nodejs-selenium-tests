const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const geckodriver = require('geckodriver');

function Build(settings)
{
  let options = new firefox.Options();
  options.addArguments('disable-infobars');
  //options.setUserPreferences({ credential_enable_service: false });
  if (settings.headless) {
      options.addArguments('--headless');
  }
  if (settings.fullscreen) {
      options.addArguments('--start-fullscreen');
  }

  let driver = new Builder()
      .setFirefoxOptions(options)
      .forBrowser('firefox')
      .build();

      return {
        Builder, 
        By, 
        Key, 
        until,
        driver
    }
}

module.exports = {
  Build
};