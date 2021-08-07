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

    await instaPuppet.page.goto(URL, {
      waitUntil: "networkidle2",
    });
  },
};

module.exports = instaPuppet;
