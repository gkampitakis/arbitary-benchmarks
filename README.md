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

<details><summary>Scenarios</summary>
<p>

```bash
# Check Object Key

Fastest: In
Slowest: hasOwnProperty

# Copy Array

Fastest: Slice
Slowest: Map

# String Contains

Fastest: IndexOf
Slowest: Match

# Timer Contains

Fastest: Test Date Timer
Slowest: Test Node Timer

# Promise All

Fastest: Native Promise All(promise Array)
Slowest: Loop Promise All(promise Array)

# Chunk Array 

Fastest: Chunk Array V2
Slowest: Chunk Array V3

# Is Array

Fastest: Array Constructor> Object
Slowest: Array to String> Array

# Is Object

Fastest: Object Constructor> Array
Slowest: Object to String> Array

#Is Primitive

Fastest: Typeof
Slowest: Regex

```
</p>
</details>

<br>

You can also run them locally. check the results in console or in `/results` directory.

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
