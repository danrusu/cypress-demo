const cypress = require('cypress');

cypress.run({
  browser: 'firefox',
  headless: false,

  spec: 'cypress/integration/calculate-test/calculate.spec.js',

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit-report-[hash].xml',
    toConsole: true,
  },
});
