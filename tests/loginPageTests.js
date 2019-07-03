const { describe, it, after, before } = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const Page = require('../pages/loginPage');
const settings = require('../infrastructure/settings');
const routes = require('../infrastructure/routes');

(async function example() {
  try {
      describe ('Login', async function () {
          this.timeout(50000);
          let page;

          beforeEach (async () => {
              page = new Page();
              await page.goTo(settings.baseUrl + routes.login);
          });

          afterEach (async () => {
              await page.quit();
          });

          it ('invalid login should show error', async () => {

            let email = await page.findEmail();
            let password = await page.findPassword();
            let submit = await page.findSubmitButton();

            await email.sendKeys('email@gmail.com');
            await password.sendKeys('123456');
            await submit.sendKeys(page.Key.ENTER);

            let summary = await page.findErrorSummary();
            let result = await summary.isDisplayed();

            expect(result).to.be.true;
          });
      });
  } catch (ex) {
      console.log (new Error(ex.message));
  } finally {

  }
})();