
import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@sanity"}, function () {
  browser.manage().window().maximize();
});

Before({tags: "@smoke"}, function () {
 console.log("this log is used for angular from hooks page");
});

After(async function (Scenario) {
    console.log("Test is completed from hooks page");
    if(Scenario.result.status== Status.FAILED)
    {
        const screenshot=await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
   });

