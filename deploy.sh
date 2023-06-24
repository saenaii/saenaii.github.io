#!/usr/bin/env sh

set -e

yarn run build

cd public

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/saenaii/saenai-blog.git master:pages

cd -