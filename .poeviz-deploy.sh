#!/bin/bash
ssh poeviz@poeviz.com <<'ENDSSH'

cd site

# backup trees
tar cfvz get_trees.tar.gz TreeStats/task/get_trees/*_get_trees.csv.gz

# update backend
cd TreeStats
git pull
yarn

cd ..

# update frontend
cd public/TreeStats
git fetch
git reset --hard origin/gh-pages

cd ../..

# update trees
node TreeStats/task/build_sources_index.js TreeStats/task/get_trees public/TreeStats/sources_production.json data
find public/TreeStats/data/ -type f -name '*_get_trees.csv.gz' -delete
find TreeStats/task/get_trees/ -type f -name "*_get_trees.csv" -exec bash -c 'gzip -c "$1" > public/TreeStats/data/"$1".gz'  - {} \;

ENDSSH