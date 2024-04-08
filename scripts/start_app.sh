#!/bin/bash

execute_database_tasks() {
    if [ "${RESET_DB}" = "true" ]; then
      echo "The RESET_DB environment variable is set to true. Migrations will be executed with reset option."
      echo "Running migrations with reset mode..."
      yarn run migrate:reset
      return
    fi

    if [ "${SKIP_MIGRATIONS}" = "true" ]; then
        echo "The SKIP_MIGRATIONS environment variable is set to true. Migrations will not be executed."
    else
        echo "Running migrations..."
        yarn run migrate:dev
    fi
}
if [ "${NODE_ENV}" = "development" ]; then
  execute_database_tasks

  echo "Starting the application in development mode"
  yarn start
fi

if [ "${NODE_ENV}" = "production" ]; then
  echo "Deploying migrations..."
  npm run prisma:generate
  npm run migrate:deploy

  echo "Starting server..."
  node src/index.js
fi