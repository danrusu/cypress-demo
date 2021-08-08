/*
// https://docs.cypress.io/guides/guides/environment-variables.html#Setting
Environment variables (bottom to top overriding)
- cypres.json
- cypress.env.json
- export as CYPRESS_
- use CLI --env name1=val1,name2=val2
- set an env var in PLUGINS
- custom suite/test env
 */
describe('Misc', { retries: 1, env: { SUITE_ENV_VAL: 100 } }, () => {
  it('Env vars1', () => console.log(JSON.stringify(Cypress.env(), null, 2)));
  it(
    'Env vars2',
    {
      env: {
        TEST_URL: 'http://qatools.ro/calculate',
        languages: ['en', 'ro'],
      },
    },
    () => console.log(JSON.stringify(Cypress.env(), null, 2)),
  );
});
