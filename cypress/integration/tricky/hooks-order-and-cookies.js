const logCookies = () => cy.getCookies().then(cookies => console.log(
  `Cookies: ${JSON.stringify(cookies, null, 2)}`)
);

const log = message => {
  cy.log(message);
  console.log(message);
}

// console log for cookies changes
// https://docs.cypress.io/api/cypress-api/cookies#Debug
Cypress.Cookies.debug(true);

// Cookies are reset before each test (it)!
// Watch the console to clarify hooks order and cookies set/reset!
describe('Cookie test 1', () => {
  // after hooks run last, once, in order
  // afterEach hooks run after each test (it), in order
  afterEach('AfterEach 1', () => {
    log('afterEach 1');
    logCookies();
  });
  after('After 1', () => log('after 1'));
  afterEach('AfterEach 2', () => log('afterEach 2'));
  after('After 2', () => log('after 2'));

  // before hooks run first, once, in order
  // beforeEach run before each test (it), in order
  beforeEach('BeforeEach 1', () => {
    log('beforEach 1');
    logCookies();
  });
  before('Before 1', () => {
    console.log('***** Test suite: Cookie test 1');
    log('before 1');
  });
  beforeEach('BeforeEach 2', () => log('beforeEach 2'));
  before('Before 2', () => log('before 2'));


  it('Set a cookie', () => {
    console.log('Test 1: Set a cookie');
    cy.visit('http://qatools.ro');
    cy.setCookie('test1', '1111');
  });
  
  it('Check cookies 1', () => {
    console.log('Test 2: Check cookies 1');
  });

  //https://docs.cypress.io/api/cypress-api/cookies#Defaults
  it('Set a cookie and preserve it through all tests', () => {
    console.log('Test 3: Set a cookie and preserve it through all tests');
    cy.setCookie('test2', '2222');
    // preserve all current cookies
    cy.getCookies().then(cookies => {
      Cypress.Cookies.defaults({
        preserve: cookies.map(cookie => cookie.name),
      });
    });
  });

  it('Check cookies 2', () => {
    console.log('Test 4: Check cookies 2');
  });

  it('Check cookies 3', () => {
    console.log('Test 5: Check cookies 3');
  });
});

describe('Cookie test 2', () => {
  before('Before 1', () => {
    console.log('***** Test suite: Cookie test 2');
    log('before 1');
  });

  afterEach('AfterEach 1', () => {
    log('afterEach 1');
    logCookies();
  });
 
  it('Check cookies 1', () => {
    console.log('Test 1: Check cookies 1');
  });
});