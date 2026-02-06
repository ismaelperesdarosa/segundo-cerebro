#!/bin/bash

cd "/home/ism/meu sistema/site do github"

echo "Monitorando mudanças..."

while inotifywait -r -e modify,create,delete .; do
  git add .
  git commit -m "update automatico"
  git push
done
