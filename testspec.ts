import { browser, element, by } from "protractor"
import { angularHomePage } from "./pageObjects/angularHomePage";
import { calculator } from "./pageObjects/calculator";

describe('Learn Suite', () => {

    it('Open Angular Js Website', async () => {
        let calc = new calculator();
        browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstEditBox.sendKeys(2);
        await calc.secondEditBox.sendKeys(3);
        await calc.go.click();
        await calc.getResult.getText().then(function (text) {
            console.log(text);
        })
    })

    it('Angular home page title validation', async () => {
        let ah = new angularHomePage();
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");
    })
})


