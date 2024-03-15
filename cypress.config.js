const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.nublue.co.uk/",
    viewportWidth: 1366,
    viewportHeight: 768,

    retries: {
      runMode: 2,
      openMode: 1,
    },
    experimentalRunAllSpecs: true,

  },

  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": true,
    "timestamp": "mmddyyyy_HHMMss",
    "reportTitle": "Report",
    "cdn": true,
    "charts": true
  }
});
