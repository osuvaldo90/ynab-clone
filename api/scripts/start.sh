#!/bin/sh -e

script_dir="$( cd "$(dirname "$0")" ; pwd -P )"

$script_dir/setup-symlinks.sh
npx graphql-codegen
tsc
node $script_dir/../build/src/start.js
