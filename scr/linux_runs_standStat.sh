#!/usr/bin/env bash
# linux_runs_standStat.sh

set -e
set -x

uname -a
bash --version
node -v
npm -v

cd $(dirname $0)
pwd
node standStat.cjs --port 2022 --directory public
