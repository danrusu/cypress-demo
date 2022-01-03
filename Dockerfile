# # Container image that runs your code
# FROM alpine:3.10

# # Copies your code file from your action repository to the filesystem path `/` of the container
# COPY entrypoint.sh /entrypoint.sh

# RUN chmod +x /entrypoint.sh 

# # Code file to execute when the docker container starts up (`entrypoint.sh`)
# ENTRYPOINT ["/entrypoint.sh"]

FROM cypress/included:9.2.0

WORKDIR /opt/work

COPY cypress.json ./
COPY package.json ./
COPY cypress ./cypress

RUN npm install \
    cypress-cucumber-preprocessor@4.2.0 \
    mocha@9.1.1 \
    mocha-junit-reporter@2.0.0 \
    @applitools/eyes-cypress

# base image ENTRYPOINT ["cypress", "run"]