const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    //specPattern: "./cypress/tests/*/*",
    // specPattern: "./cypress/tests2/**.*",
    //specPattern: "cypress/e2e/*.feature",
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}',

    baseUrl: "https://chorus-dev.one-line.com/bkm/booking",
    
  },
});
