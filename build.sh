#!/bin/bash
cp prod.html ../deploy/index.html
mkdir -p ../deploy/resources/public
cp resources/public/* ../deploy/resources/public
cp favicon.png ../deploy
