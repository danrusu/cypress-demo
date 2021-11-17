describe('Environment variables test suite', () => {
  const interceptedRequests = [];

  const isEmptyObject = obj => Object.keys(obj).length === 0;
  const getDomain = url => new URL(url).hostname;
  const getDomains = requestsArray => [
    ...new Set(requestsArray.map(request => getDomain(request.url))),
  ];

  const getSearchParams = url => {
    const searchParams = {};
    new URL(url).searchParams.forEach((val, name) => {
      searchParams[name] = val;
    });
    return searchParams;
  };

  const addDomainInfo = (info, domain) => keyValuePair => {
    const key = Object.keys(keyValuePair)[0];
    const value = keyValuePair[key];
    if (Object.keys(info).includes(domain)) {
      const currentDomain = info[domain];
      if (!isEmptyObject(value)) {
        currentDomain[key].push(value);
      }
    } else {
      info[domain] = { urlParams: [], headers: [], bodies: [] };
      if (!isEmptyObject(value)) {
        info[domain][key] = [value];
      }
    }
  };

  const getRequestsInfo = requests =>
    requests.reduce((info, request) => {
      const domain = getDomain(request.url);
      const urlParams = getSearchParams(request.url);
      const { headers, body: bodies } = request;

      const addCurrentInfo = addDomainInfo(info, domain);
      [{ urlParams }, { bodies }, { headers }].forEach(addCurrentInfo);

      return info;
    }, {});

  it('Visit page', () => {
    cy.intercept(/.*/, req => {
      interceptedRequests.push(req);
    }).as('all');

    cy.visit('http://qatools.ro/demo/requests.html');

    cy.wait(5000); //not any other way to know how many requests are triggered
  });

  it('Logs domains', () => {
    cy.log(`Intercepted ${interceptedRequests.length} requests`);

    cy.wrap(null).then(() => {
      cy.log(`Domains: ${JSON.stringify(getDomains(interceptedRequests))}`);

      const requestsInfo = getRequestsInfo(interceptedRequests);
      console.log(JSON.stringify(requestsInfo, null, 2));

      cy.writeFile(
        'cypress/downloads/interceptAll.json',
        JSON.stringify(requestsInfo, null, 2),
      );
    });
  });
});
