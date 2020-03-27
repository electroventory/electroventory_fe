FROM node:10
# Create app directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json yarn.lock ./
# Install app dependencies
RUN yarn install --frozen-lockfile --production && yarn cache clean
# Bundle app source
COPY . .
# Expose default port for server
EXPOSE 5000
# Build the application
RUN yarn build
# Set application to run
ENTRYPOINT ["yarn"]
# Add the arguments we need to pass into the command above.
CMD ["serve", "-s", "./build"]