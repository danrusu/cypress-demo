FROM cypress/browsers:node12.18.0-chrome83-ff77

WORKDIR /opt/cypress-demo

COPY cypress/ ./cypress
COPY cypress.json ./

RUN npm install \
  cypress@7.3.0 \
  cypress-cucumber-preprocessor@4.1.0 \
  mocha@8.4.0 \
  mocha-multi-reporters@1.5.1 \
  -S

ENTRYPOINT [ "node_modules/.bin/cypress", \
  "run", \
  "--headless", \
  "--browser", \
  "chrome", \
  "--env", \
  "baseUrl=http://qatools.ro,env=desktop" \
]