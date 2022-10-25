$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/smoke/ScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Scenario Outline Demo",
  "description": "",
  "id": "scenario-outline-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-demo;demo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cemail\u003e\" in email input field",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cpassword\u003e\" in password input field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should successfully sign in",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "scenario-outline-demo;demo;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 11,
      "id": "scenario-outline-demo;demo;;1"
    },
    {
      "cells": [
        "test@gmail.com",
        "123"
      ],
      "line": 12,
      "id": "scenario-outline-demo;demo;;2"
    },
    {
      "cells": [
        "test1@gmail.com",
        "1234"
      ],
      "line": 13,
      "id": "scenario-outline-demo;demo;;3"
    },
    {
      "cells": [
        "test2@gmail.com",
        "12345"
      ],
      "line": 14,
      "id": "scenario-outline-demo;demo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 134900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-demo;demo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter \"test@gmail.com\" in email input field",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"123\" in password input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should successfully sign in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 12
    }
  ],
  "location": "TestScenarioOutlineSteps.user_enter_in_email_input_field(String)"
});
formatter.result({
  "duration": 97796200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 12
    }
  ],
  "location": "TestScenarioOutlineSteps.user_enter_in_password_input_field(String)"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "location": "TestScenarioOutlineSteps.user_click_Login_button()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "TestScenarioOutlineSteps.user_should_successfully_sign_in()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.after({
  "duration": 2034000,
  "status": "passed"
});
formatter.before({
  "duration": 59200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-demo;demo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter \"test1@gmail.com\" in email input field",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"1234\" in password input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should successfully sign in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test1@gmail.com",
      "offset": 12
    }
  ],
  "location": "TestScenarioOutlineSteps.user_enter_in_email_input_field(String)"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 12
    }
  ],
  "location": "TestScenarioOutlineSteps.user_enter_in_password_input_field(String)"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "location": "TestScenarioOutlineSteps.user_click_Login_button()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "location": "TestScenarioOutlineSteps.user_should_successfully_sign_in()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.after({
  "duration": 34500,
  "status": "passed"
});
formatter.before({
  "duration": 29800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-demo;demo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter \"test2@gmail.com\" in email input field",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"12345\" in password input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should successfully sign in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test2@gmail.com",
      "offset": 12
    }
  ],
  "location": "TestScenarioOutlineSteps.user_enter_in_email_input_field(String)"
});
formatter.result({
  "duration": 94600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 12
    }
  ],
  "location": "TestScenarioOutlineSteps.user_enter_in_password_input_field(String)"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.match({
  "location": "TestScenarioOutlineSteps.user_click_Login_button()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.match({
  "location": "TestScenarioOutlineSteps.user_should_successfully_sign_in()"
});
formatter.result({
  "duration": 6800,
  "status": "passed"
});
formatter.after({
  "duration": 25900,
  "status": "passed"
});
});