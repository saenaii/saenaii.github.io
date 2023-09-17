#!/usr/bin/env sh

set -e

# cd scripts
# go run main.go
# cd -

export NODE_OPTIONS=--openssl-legacy-provider

yarn run build

cd public

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/saenaii/saenaii.github.io.git master:pages

cd -