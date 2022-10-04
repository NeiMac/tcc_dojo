const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    viewportWidth: 1920,
    viewportHeight: 1080,
  },

  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl : 'http://lojaebac.ebaconline.art.br/', 
  },
});
