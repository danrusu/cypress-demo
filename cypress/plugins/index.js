/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;

let shared = {};

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());

  on('task', {
    share(obj) {
      shared = { ...shared, ...obj };
      console.log(`Shared globally: ${JSON.stringify(shared)}`);
      return null;
    },
    getShared() {
      return shared;
    },
    logToTerminal(message) {
      console.log(message);
      return null;
    },
    asyncLog({ message, delay }) {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`before resolving to ${message} (delay = ${delay})`);
          resolve(message);
        }, delay);
      });
    },
  });
};
