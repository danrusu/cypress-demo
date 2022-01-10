#FROM cypress/browsers:node14.17.0-chrome91-ff89
#FROM danrusu/cypress-browsers
FROM cypress/included:9.2.0

WORKDIR /opt/tests

COPY cypress/ ./cypress
COPY cypress.json ./

RUN npm install \
  cypress-cucumber-preprocessor@4.2.0 \
  mocha@8.4.0 \
  mocha-junit-reporter@2.0.0 \
  -S

# base image: ENTRYPOINT [ "cypress", "run" ]
