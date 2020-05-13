#/bin/sh

set -e

export PORT=8001
npx wdio wdio.conf.js
