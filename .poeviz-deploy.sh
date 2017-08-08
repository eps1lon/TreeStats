#!/bin/bash
ssh poeviz@poeviz.com <<'ENDSSH'

cd site

# backup trees
tar cfv get_trees.tar TreeStats/task/get_trees/*_get_trees.csv

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

# only zip new files
for in_file in TreeStats/task/get_trees/*_get_trees.csv; do
  # get basename of file and join with out dir
  out_file="public/TreeStats/data/${in_file##*/}.gz"
  
  # check for non zero in case we aborted the last deploy
  # the script will have created in this case the files but
  # without content
  if [ ! -s $out_file ]; then
    gzip -cv $in_file > $out_file
  else
    echo "skipped $in_file"
  fi
done

ENDSSH