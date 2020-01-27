#!/usr/bin/env bash

mkdir -p './node_modules/@app'

for dir in ./src/*/     # list directories in the form "/tmp/dirname/"
do
    dir=${dir%*/}      # remove the trailing "/"
    dir=${dir##*/}
    ln -sfn ../../src/${dir}/ ./node_modules/@app
done
