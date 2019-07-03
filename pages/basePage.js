const { By, Key, until, driver } = require('../infrastructure/webdriverFactory');

const defaultTimeout = 10000; // 10s

var Page = function() {
    
    // visit a webpage
    this.goTo = async function(url) {
        return await driver.get(url);
    };

    // quit current session
    this.quit = async function() {

        return await driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), defaultTimeout, 'Looking for element by id "' + id + '#');
        return await driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await driver.wait(until.elementLocated(By.name(name)), defaultTimeout, 'Looking for element by name "' + name + '"');
        return await driver.findElement(By.name(name));
    };

    // wait and find a specific element by cpath
    this.findByXpath = async function(xpath) {
        await driver.wait(until.elementLocated(By.xpath(xpath)), defaultTimeout, 'Looking for element by xpath "' + xpath + '"');
        return await driver.findElement(By.xpath(xpath));
    };

    // expose driver
    this.driver = driver;
    this.Key = Key;
    this.By = By;
};

module.exports = Page;