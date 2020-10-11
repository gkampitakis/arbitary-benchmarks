# Benchmarking

## Description

Benchmarking some general javascript scenarios out of curiosity.

## Usage

Install dependencies:
`npm install`

Run Benchmark you want to see results of:
`npm run benchmark --case=timer`

You can also run all the benchmark cases at once
`npm run benchmark:all`

## Results

You can check the results in console or in `/results` directory.

## Benchmarks 

### General Cases

- `npm run benchmark --case=checkObjectKey`
- `npm run benchmark --case=chunkArray`
- `npm run benchmark --case=copyArray`
- `npm run benchmark --case=isObject`
- `npm run benchmark --case=promiseAll`
- `npm run benchmark --case=stringContains`
- `npm run benchmark --case=timer`
- All of the above `npm run benchmark:all`

### [Promises-extension](https://github.com/gkampitakis/promises-extension)

There are two versions where you can change `*` with `v1` or `v2`.

- `npm run benchmark --case=promises-extension/*/allSettled`
- `npm run benchmark --case=promises-extension/*/each`
- `npm run benchmark --case=promises-extension/*/map`
- `npm run benchmark --case=promises-extension/*/prop`
- All of the above `npm run benchmark::promises-*`

