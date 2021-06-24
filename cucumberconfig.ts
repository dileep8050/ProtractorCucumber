import { Config } from "protractor";
//import * as reporter from "cucumber-html-reporter";
var reporter = require('cucumber-html-reporter');

// An example configuration file
export let config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../features/demo.feature'],

  cucumberOpts: {
    // require step definitions
    // tags:'(@smoke or @check) and (not @sanity)',
    tags: '(@smoke or @sanity or @check)',
    format: 'json:./cucumberreports.json',
    
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  },
  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreports.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };
    reporter.generate(options);
  }
};
