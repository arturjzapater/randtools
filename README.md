# randtools

**randtools** is a small JavaScript library to generate random numbers and select random elements from arrays. It supports [normal distributions](https://en.wikipedia.org/wiki/Normal_distribution) as well as [uniform](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)) and custom distributions.

- [Installation](#installation)
- [How to Use It](#how-to-use-it)
- [Functions](#functions)

## Installation

**randtools** is available as an npm package. Simply run:

```
$ npm install randtools
```

Then you can require and use it like any other module.

```javascript
const rnd = require('randtools')

//Generate a random number with a normal distribution with a mean of 100 and a standard deviation of 10
const normalDistNum = rnd.normal(100, 10)
//Generate a random two-decimal number with a uniform distribution ranging from 2 to 3
const decimalNum = rnd.unifRange(2, 3, 2)
```

## Functions

**randtools** offers a total of six functions for three different kinds of distributions.

- [Normal Distribution Functions](#normal-distribution-functions)
- [Uniform Distribution Functions](#uniform-distribution-functions)
- [Custom Distribution Functions](#custom-distribution-functions)

### Normal Distribution Functions

These functions are based on the [Box-Muller transform](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform) to generate a random number with a [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution). They will generate a random result that tends towards the mean.

#### normal(mean, deviation[, decimals])

Generates a random number.
- `mean`: the mean of the distribution. The generated numbers will tend towards this value.
- `deviation`: the standard deviation of the distribution. The greater it is, the greater the variance will be.
- `decimals`: the amount of decimals that the generated number will have. It defaults to zero.

#### normChoose(array[, devs])

Returns a random element from a given array.
- `array`: the array from which to choose an element.
- `devs`: the amount of standard deviations within the allowed range of results. A small number will create a more uniform distribution, while a number greater than 4 will cause the chances of the elements at the beginning and end of the array to be negligible. It defaults to three. It won't accept any value smaller than 1.

#### normRange(from, to[, decimals[, devs]])

Generates a random number within a given range.
- `from`: the lowest possible returned number.
- `to`: the highest possible returned number.
- `decimals`: the amount of decimals that the generated number will have. It defauls to zero. If either `from` or `to` is a number with more decimal digits than `decimals`, the function will use that amount instead.
- `devs`: the amount of standard deviations within the allowed range of results. A small number will create a more uniform distribution, while a big number will reduce the chances of numbers on the fringes of the range to come up. It defaults to three. It won't accept any value smaller than 1.

### Uniform Distribution Functions

These functions will generate a random result with a [uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)) in which all possible results are equally likely.

#### unifChoose(array)

Returns a random element from a given array.
- `array`: the array from which to choose an element.

#### unifRange(from, to[, decimals])

Generates a random number within a given range.
- `from`: the lowest possible returned number.
- `to`: the highest possible returned number.
- `decimals`: the amount of decimals that the generated number will have. It defaults to zero. If either `from` or `to` is a number with more decimal digits than `decimals`, the function will use that amount instead.

### Custom Distribution Functions

These functions allow the user to set a custom distribution and define the likeliness for each result to be returned.

#### cstmChoose(array, chance)

Returns a random element from a given array.
- `array`: the array from which to choose an element.
- `chance`: an array in which the cumulative chance for each element of `array` is given. The last element should be given a value of `100`.

This function takes two arrays of the same length. The first one are the values from which to return something. The second one describes how likely each result is to come up. In the following code, `cstmChoose` will return an element from `array`. `a` will have a 20% to be returned, `b`'s chance will be 30% (50 - 20) and `c`'s 50% (100 - 50).

```javascript
const rnd = require('randtools')

const array = [ "a", "b", "c" ]
const likelihood = [ 20, 50, 100 ]
const randElem = rnd.cstmChoose(array, likelihood)
```

**Note** that if `array` is longer than `chance`, the elements with higher indexes will never be returned. Conversely, if `chance` is longer or if the last element is below 100, the function might return `undefined`
