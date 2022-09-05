#!/usr/bin/env bash
# create_zip_example.sh

cd $(dirname $0)

if [[ ! -f dist/standStat.cjs ]]; then
  echo "ERR045: Error, the file dist/standStat.cjs doesn't exist!"
  echo "first run : npm run build"
  exit -1
fi

mkdir -p tmp/example1
cd tmp
cp -a ../tests/public example1/
cp ../dist/standStat.cjs example1/
cp ../scr/linux_runs_standStat.sh example1/
cp ../scr/windows_runs_standStat.cmd example1/
zip -r example1.zip example1
ls -l example1.zip

