let Page = require('./basePage');

Page.prototype.locator = {
    email:  'id_userLoginId',
    password: 'id_password',
    submitButton: 'btn-login',
    submitButton: '//form//button[contains(@class, "login-button")]',
    errorSummary: '//div[contains(@class, "ui-message-container")]'
}

Page.prototype.findEmail = async function () {
    return await this.findById(this.locator.email);
}
Page.prototype.findPassword = async function () {
    return await this.findById(this.locator.password);
}
Page.prototype.findSubmitButton = async function () {
    return await this.findByXpath(this.locator.submitButton);
}
Page.prototype.findErrorSummary = async function () {
    return await this.findByXpath(this.locator.errorSummary);
}

module.exports = Page;