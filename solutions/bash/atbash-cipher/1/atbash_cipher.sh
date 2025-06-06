#!/usr/bin/env bash

alphabet=$(echo {a..z} | tr -d "[:blank:]")
cipher=$(echo ${alphabet} | rev)
main () {
    $"${1,,}" "${2,,}"
}
encode () {
    echo "$1" \
    | tr -dc '[:alnum:]' \
    | tr "$alphabet" "$cipher" \
    | sed -E 's/(.{5})/\1 /g' \
    | sed -E 's/ $//g'
}
decode () {
    echo "$1" \
    | tr "$cipher" "$alphabet" \
    | tr -d "[:blank:]"
}
main "$@"