const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("check 'See All Bots' button is visible", async () => {
    await driver.get("http://localhost:8000");
    const seeAllBotsBtn = await driver.findElement(By.id("see-all"));
    const isDisplayed = await seeAllBotsBtn.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  });

  test("check 'Draw' button functionality", async () => {
    await driver.get("http://localhost:8000");
    const drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();

    // Wait until the 'Draw' button is hidden
    await driver.wait(until.elementIsNotVisible(drawBtn), 1000);

    // Check if the 'Duel' button is visible now
    const duelBtn = await driver.findElement(By.id("duel"));
    const isDisplayed = await duelBtn.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  });
});
