const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();

Given('the user navigates to {string}', async function (string) {
  await driver.sleep(1000); // The value is in milliseconds
  await driver.get(string);
  await driver.sleep(2000); // The value is in milliseconds
});

When('the user clicks on the "Basic Button"', async function () {
  const button = await driver.findElement(By.className('btn-1'));
  await button.click();
  await driver.sleep(1000); // The value is in milliseconds
  await button.click();
  await driver.sleep(1000); // The value is in milliseconds
  await driver.quit(); // The value is in milliseconds

});

// Then('the button should show a click confirmation', async function () {
//   // Adapt this check to the actual behavior of the button when clicked
//   let button = await driver.findElement(By.className('btn-1'));
//   await driver.wait(until.elementIsVisible(button), 5000);
//   const text = await button.getText();
//   expect(text).to.include('Clicked'); // Change 'Clicked' to the actual confirmation text or state
//   await driver.quit(); // Close the browser after the test
// });
