# Use a base image containing Node.js
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /code

# Copy configuration files and project dependencies
COPY ../../package*.json ./
COPY ../../tsconfig.json ./
COPY ../../yarn.lock ./

# Install project dependencies
RUN npm install -g yarn --force
RUN yarn --quiet

# Compile TypeScript code
RUN yarn run build

# Copy the rest of the project files
COPY ../../. .

# Command to start the application
CMD ["sh", "scripts/start_app.sh"]