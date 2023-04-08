const { defineConfig } = require("cypress");
require("dotenv").config()
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.HOST_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
