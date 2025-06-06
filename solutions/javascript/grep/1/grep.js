#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const ARGS = process.argv;

//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.
const getArgs = (args) => ({
  flags: args.filter(o => o.startsWith('-')),
  pattern: args.filter(o => !o.startsWith('-') && !o.match(/.*\.\w+/g)),
  paths: args.filter(o => o.match(/.*\.\w+/g)),
})

const makeRegEx = ({flags, pattern}) => {
  return new RegExp(
    flags.includes('-x') ? `^${pattern}$` : pattern,
    flags.includes('-i') ? 'i' : ''
  )
}

//console.log(makeRegEx(getArgs(ARGS.slice(2))))

const doWork = () => {
  let {flags, pattern, paths} = getArgs(ARGS.slice(2))
  let regex = makeRegEx({flags, pattern})
  let results = []
  for (const file of paths) {
      readLines(file).forEach((line, index) => {
          if (flags.includes('-v') ? line.match(regex) : !line.match(regex)) {
              return
          }
          flags.includes('-l') && results.push(file)
          if (flags.includes('-n') && !flags.includes('-l')) {
              results.push((paths.length > 1 ? `${file}:` : '') + `${index + 1}:${line}`)
          }
          if (!flags.some(flag => ['-l', '-n'].includes(flag))) {
              results.push((paths.length > 1 ? `${file}:` : '') + line)
          }
      })
  }
  if (flags.includes('-l')) {
      results = Array.from(new Set(results))
  }
  results.forEach(r => console.log(r))
}

doWork()
