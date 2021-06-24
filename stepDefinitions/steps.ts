import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import { calculator } from "../pageObjects/calculator";
import chai from "chai";
var expect=chai.expect;
let ah = new angularHomePage();
let calc = new calculator();

Given('I will navigate to {string} site', async (string) => {
    await browser.get(string);
});

When('I clicked on header link', async () => {
    await ah.angularLink.click().then(function () {
        browser.sleep(3000);
    });
});

When('you will navigate to angular page', async () => {
    browser.getTitle().then((title)=>(console.log("Title of the page is  :"+title)));
});

Then('you will enter {string} in search box', async (searchValue) => {
    await ah.search.sendKeys(searchValue);
});

When('I will add two number {string} and {string}', async (firstboxvalue, secondboxvalue) => {
    await calc.firstEditBox.sendKeys(firstboxvalue);
    await calc.secondEditBox.sendKeys(secondboxvalue);
    await calc.go.click();
});

Then('The output displayed should be {string}', async (expectedValue) => {
    await calc.getResult.getText().then(function (text) {
        console.log("Value from portal : " + text);
        console.log("Expected Value : " + expectedValue);
        expect(text).to.equal(expectedValue);
    })
});
