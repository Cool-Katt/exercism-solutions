#!/usr/bin/env bash
ts=$(date -d $1 +%s)
future=$(bc <<< "$ts + 1000000000")
date -d "@$future" "+%Y-%m-%dT%H:%M:%S"
