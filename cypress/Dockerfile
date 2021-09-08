#FROM cypress/browsers:node14.17.0-chrome91-ff89
FROM danrusu/cypress-browsers

WORKDIR /opt/cypress-demo

COPY cypress/ ./cypress
COPY cypress.json ./

RUN npm install \
  cypress@8.3.1 \
  cypress-cucumber-preprocessor@4.2.0 \
  mocha@8.4.0 \
  mocha-junit-reporter@2.0.0 \
  -S

ENTRYPOINT [ "node_modules/.bin/cypress", \
  "run", \
  "--browser", \
  "chrome", \
  "--env", \
  "baseUrl=http://qatools.ro,viewport=desktop" \
  ]
