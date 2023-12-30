#!/bin/bash

echo "Pulling latest images"
docker compose --file /home/alec/projects/awinter-dev/backend/scripts/compose.yml pull

echo "Restarting with latest images"
docker compose --file /home/alec/projects/awinter-dev/backend/scripts/compose.yml up -d
