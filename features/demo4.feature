Feature: demo 4 I am going to validate Calculator App

@smoke
Scenario Outline: Validate angular page
Given I will navigate to "https://angularjs.org/" site
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
    | key |
    | hello  |

@sanity
Scenario Outline: Validate calculator page
Given I will navigate to "http://juliemr.github.io/protractor-demo/" site
When I will add two number "<firstbox>" and "<secondbox>"
Then The output displayed should be "<expected>"
Examples:
    | firstbox | secondbox | expected |
    | 3  | 5  | 8  |
    | 5  | 10  | 15  |

@check
Scenario Outline: Validate angular page1
Given I will navigate to "https://angularjs.org/" site
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
    | key |
    | check  |


