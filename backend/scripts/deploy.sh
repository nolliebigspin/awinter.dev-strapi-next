#!/bin/bash

ENV_FILE="./.env"

echo "Pulling latest images"
docker compose --file ./compose.yml pull

echo "Restarting with latest images"
docker compose --file ./compose.yml --env-file $ENV_FILE up -d
