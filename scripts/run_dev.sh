#!/bin/bash

DOCKER_COMPOSE_FILE=docker/dev/docker-compose.dev.yml

echo "Starting app with docker compose. Loading compose file from $DOCKER_COMPOSE_FILE"

if [ "$REQUEST_BUILD" = "true" ]; then
    echo "Requested image build before starting containers..."
    docker compose -f $DOCKER_COMPOSE_FILE up --build
else
    docker compose -f $DOCKER_COMPOSE_FILE up
fi