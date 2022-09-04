#!/usr/bin/env bash
# run_standStat.sh

set -e
set -x

uname -a
bash --version
node -v
npm -v

cd $(dirname $0)
node standStat.cjs --port 2022 --directory public
