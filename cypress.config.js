const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: "./cypress/tests/*/*",
    specPattern: "./cypress/tests2/**.*",

    baseUrl: "https://chorus-dev.one-line.com/bkm/booking",
    
  },
});
