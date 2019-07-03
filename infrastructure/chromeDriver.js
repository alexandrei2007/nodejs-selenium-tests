const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

function Build (settings)
{
    let options = new chrome.Options();
    options.addArguments('disable-infobars');
    options.setUserPreferences({ credential_enable_service: false });
    if (settings.headless) {
        options.addArguments('headless');
    }
    if (settings.fullscreen) {
        options.addArguments('start-maximized');
    }

    let driver = new Builder()
        .setChromeOptions(options)
        .forBrowser('chrome')
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