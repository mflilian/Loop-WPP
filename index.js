const puppeteer = require("puppeteer");

// Login Function Logic
(async function main() {
  try {
    // Configures puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    //Navigates to Whatsapp
    await page.goto("https://web.whatsapp.com/");

    // //Searches person by title
    await page.waitForSelector(".zoWT4"); //Add selector by the css class who was identified by html code
    await delay(7000);

    //Change to contact you want to send messages to
    const contactName = "gatchuniks";
    await page.click(`span[title='${contactName}']`);
    await page.waitForSelector(".zoWT4"); //Add selector by the css class who was identified by html code

    //Finds the message bar and focuses on it
    const editor = await page.$("div[data-tab='6']"); //Add message bar by the css class who was identified by html code

    //Amount of messages you want to send
    const amountOfMessages = 500;

    //Loops through cycle of sending message
    for (var i = 0; i < amountOfMessages; i++) {
      await page.evaluate(() => {
        const message = "OLHA AI O TRAVAZAP PASSANDO FREGUESA";
        document.execCommand("insertText", false, message);
      });
      await page.click("span[data-testid='send']"); //Add send message button by the css class who was identified by html code
      await delay(500);
    }
  } catch (e) {
    console.error("error mine", e);
  }
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
