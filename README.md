# TreeStats
[![Build Status](https://travis-ci.org/eps1lon/TreeStats.svg?branch=master)](https://travis-ci.org/eps1lon/TreeStats)

Provides aggregated usage statistics of the passive tree in [Path of Exile](https://www.pathofexile.com/ "Path of Exile Website") for the top ladder characters.

# Usage
TODO

## Screenshots
Example with a blacklist to resume batch processing. 
Only querying Legacy league on the deployed app:
  `node task/screenshot.js poeviz Legacy sources_production.json http://treestats.poeviz.com/ viz_legacy_blacklist.tmp`

## Video
Use a image slideshow tool of your own preference. I went with `ffmpeg`:
  `ffmpeg -framerate 4 -pattern_type glob -i 'task/screenshot/poeviz-*-Legacy.png' -c:v libx264 -pix_fmt yuv420p legacy.mp4`

# License
[MIT](https://opensource.org/licenses/MIT "MIT license").
