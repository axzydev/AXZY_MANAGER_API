#!/bin/bash

DOCKER_COMPOSE_FILE=docker/production/docker-compose.production.yml

echo "Starting app with docker compose. Loading compose file from $DOCKER_COMPOSE_FILE"

docker compose -f $DOCKER_COMPOSE_FILE  up