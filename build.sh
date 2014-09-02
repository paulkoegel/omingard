#!/bin/bash
cp prod.html ../deploy/index.html
rm -rf ../deploy/resources # reset resources directory
mkdir -p ../deploy/resources/public
cp resources/public/* ../deploy/resources/public
cp favicon.png ../deploy
