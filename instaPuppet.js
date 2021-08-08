const puppeteer = require("puppeteer");
const URL = "https://www.instagram.com/";

const instaPuppet = {
  browser: null,
  page: null,

  init: async () => {
    instaPuppet.browser = await puppeteer.launch({
      headless: false,
    });

    instaPuppet.page = await instaPuppet.browser.newPage();
  },

  login: async (username, password) => {
    await instaPuppet.page.goto(URL, {
      waitUntil: "networkidle2",
    });

    await instaPuppet.page.waitForNavigation({ waitUntil: "networkidle2" });
    await instaPuppet.page.waitFor(1000);

    await instaPuppet.page.type('input[name="username"]', username, {
      delay: 50,
    });
    await instaPuppet.page.type('input[name="password"]', password, {
      delay: 50,
    });

    let loginBtn = await instaPuppet.page.$x('//a[contains(text(),"Log in")]');
    loginBtn = await instaPuppet.page.$x(
      '//button[contains(text(), "Log in")]'
    );
  },
};

module.exports = instaPuppet;
