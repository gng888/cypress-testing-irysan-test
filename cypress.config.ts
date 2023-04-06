const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

const options = {
  ...browserify.defaultOptions,
  typescript: require.resolve("typescript"),
};

export default defineConfig({
  e2e: {
    baseUrl: "http://www.google.com",
    viewportWidth: 1200,
    viewportHeight: 1900,
    specPattern: "./cypress/integration/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber(options));
    },
  },
});
