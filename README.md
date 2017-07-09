# TreeStats
[![Build Status](https://travis-ci.org/eps1lon/TreeStats.svg?branch=master)](https://travis-ci.org/eps1lon/TreeStats)

Provides aggregated usage statistics of the passive tree in [Path of Exile](https://www.pathofexile.com/ "Path of Exile Website") for the top ladder characters.

# Usage

## get trees
15000 is a limit set by the api, 3 parallel requests to the api is something 
i converged to but you may not hit the rate limit with upto 5-10 simultaneous 
requests. 200 per ladder is also set by the api and 200 simultaneous passives
fetches depends on your bandwith. Just experiment with it until it throws 
socket hung up errors.
  `node task/get_trees_stream.js 15000 400 200 3`

## source index
Creates an index file for the frontend to work with
  `node task/build_sources_index.js trees_folder frontend_public_path_from_local frontend_public_path_for_trees_from_web`

## Screenshots
Example with a blacklist to resume batch processing. 
Only querying Legacy league on the deployed app:
  `node task/screenshot.js poeviz Legacy sources_production.json http://treestats.poeviz.com/ viz_legacy_blacklist.tmp`

## Video
Use a image slideshow tool of your own preference. I went with `ffmpeg`:
  `ffmpeg -framerate 4 -pattern_type glob -i 'task/screenshot/poeviz-*-Legacy.png' -c:v libx264 -pix_fmt yuv420p legacy.mp4`

# License
[MIT](https://opensource.org/licenses/MIT "MIT license").
