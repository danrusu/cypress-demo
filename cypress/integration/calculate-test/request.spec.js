describe('Request validation', { retries: 1 }, () => {
  it.only('Request', () => {
    const expectedResult = {
      name: 'Porsche',
      model: '718 Cayman',
      availableColors: ['orange', 'red', 'yellow', 'black'],
      engine: {
        displacement: 2,
        max_power: '300 HP',
        isDiesel: false,
        type: 'flat-four-cylinder',
        transmission: {
          speedCount: 6,
          isManual: true,
        },
      },
      'max-speed': {
        value: 170,
        unit: 'mph',
      },
      price: {
        value: 61000,
        currency: '$',
      },
    };

    cy.request(`http://qatools.ro/testfiles/sportcar.json`)
      .its('body')
      .should('deep.equal', expectedResult);

    cy.request(`http://qatools.ro/testfiles/sportcar.json`)
      .its('body.availableColors')
      .should(availableColors =>
        expect(availableColors[1], 'color at index 1').equals('red')
      );

    //multiple assertions
    cy.request(`http://qatools.ro/testfiles/sportcar.json`).then(
      ({ status, body, headers, duration }) => {
        console.log(`Headers: ${JSON.stringify(headers, null, 2)}`);
        expect(status, 'status code').to.equal(200);
        expect(duration, 'duration').lessThan(500);
        expect(body.engine.transmission.speedCount, 'speedCount').equals(6);
      }
    );
  });
});
