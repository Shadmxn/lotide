# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @shadmxn/lotide`

**Require it:**

`const _ = require('@shadmxn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual: Takes in two arrays and prints an appropriate message to indicate if they are equal or not.

assertObjectsEqual: Takes in two objects and prints an appropriate message to indicate if they are equal or not.

countLetters: Takes in a sentence and returns a count of each letter in the sentence.

countOnly: Takes in a collection of items and returns a count of specific items from the collection.

eqArrays: Takes in two arrays and returns true if they are equal and false otherwise.

eqObjects: Takes in two objects and returns true if they are equal and false otherwise.

findKey: Takes in an object and a callback function, and returns the first key that meets the criteria specified in the callback.

findKeyByValue: Takes in an object and a value, and returns the first key that corresponds to that value.

flatten: Takes in an array containing nested arrays and returns a flattened version of the array.

head: Takes in an array and returns the first element of the array.

letterPositions: Takes in a string and returns an object containing all the indices of each letter in the string.

map: Takes in an array and a callback function, and returns a new array based on the results of the callback on each item in the array.

middle: Takes in an array and returns the middle-most element(s) of the array.

tail: Takes in an array and returns a new array containing all elements except the first one.

takeUntil: Takes in an array and a callback function, and returns a slice of the array based on the criteria specified in the callback.

without: Takes in a source array and an array of items to remove, and returns a new array with only the items from the source array that are not in the itemsToRemove array.
