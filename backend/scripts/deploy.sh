#!/bin/bash

echo "Pulling latest images"
docker compose pull

echo "Restarting with latest images"
docker compose up -d
