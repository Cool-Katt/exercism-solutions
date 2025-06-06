#!/usr/bin/env bash
raw=$1; slice=$2; length=${#raw}
die() { echo "$1"; exit 1; }
[[ -z $raw ]]        &&  die 'series cannot be empty'
(( slice > length )) &&  die 'slice length cannot be greater than series length'
(( slice == 0 ))     &&  die 'slice length cannot be zero'
(( slice <  0 ))     &&  die 'slice length cannot be negative'
for ((i = 0; i <= length - slice; i++)); do
    series+=("${raw: i : slice}")
done
echo "${series[@]}"