#!/usr/bin/env bash
# test_standStat.sh

cd $(dirname $0)

rm -fr tmp
mkdir -p tmp
cd tmp

#wget localhost:2022/aaa.txt
#curl -O localhost:2022/aaa.txt
#ls -la
#cat aaa.txt
curl localhost:2022/aaa.txt


