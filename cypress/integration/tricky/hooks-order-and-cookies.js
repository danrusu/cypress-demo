const logCookies = () => cy.getCookies().then(cookies => console.log(
  `Cookies: ${JSON.stringify(cookies, null, 2)}`)
);

const log = message => {
  cy.log(message);
  console.log(message);
}

// console log for cookies changes
Cypress.Cookies.debug(true);

// Cookies are reset before each test (it)!
// Watch the console to clarify hooks order and cookies set/reset!
describe('Cookie test', () => {

  console.log('Test suite (Describe) start!');

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
  before('Before 1', () => log('before 1'));
  beforeEach('BeforeEach 2', () => log('beforeEach 2'));
  before('Before 2', () => log('before 2'));


  it('Set a cookie', () => {
    console.log('Test 1: Set a cookie');
    cy.visit('http://qatools.ro');
    cy.setCookie('test', '1111');
  });
  
  it('Check cookies', () => {
    console.log('Test 2: Check cookies');
  });
});
