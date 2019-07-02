const puppeteer = require('puppeteer');
const axios = require('axios');
const config = require('./config/config.json');


(async () => {
    

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.setViewport({width: 1280, height: 800});
    await page.goto(config.urls.oreilly.url);

    await page.waitForSelector(config.urls.oreilly.firstNameSelector);
    await page.type(config.urls.oreilly.firstNameSelector, "MANASH");

    await page.waitForSelector(config.urls.oreilly.lastNameSelector);
    await page.type(config.urls.oreilly.lastNameSelector, "MANDAL");

    await page.waitForSelector(config.urls.oreilly.emailSelector);
    await page.type(config.urls.oreilly.emailSelector, "helloworldz");

    await page.waitForSelector(config.urls.oreilly.passwordSelector);
    await page.type(config.urls.oreilly.passwordSelector, "@ccess1234");

    await page.waitForSelector(config.urls.oreilly.registerButtonSelector, {visible: true});
    await page.click(config.urls.oreilly.registerButtonSelector);

    // await page.close();
})()