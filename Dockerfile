# Use the official Node.js image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files for the mock API
COPY package.json package-lock.json ./

# Install mock API server dependencies
RUN npm install

# Copy the OpenAPI spec file and mock API server code
COPY api ./api

# Expose the port that the mock server will run on
EXPOSE 4010

# Define the command to start the mock server
CMD ["npm", "run", "start-api"]
