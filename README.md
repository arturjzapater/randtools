# randtools

**randtools** is a small JavaScript library to generate random numbers and select random elements from arrays. It supports [normal distributions](https://en.wikipedia.org/wiki/Normal_distribution) as well as [uniform](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)) and custom distributions.

- [Installation](#installation)
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
const normalDistNum = rnd.normal.mean(100, 10)
//Generate a random two-decimal number with a uniform distribution ranging from 2 to 3
const decimalNum = rnd.uniform.range(2, 3, 2)
```

## New API

**randtools** offers a total of six functions for three different kinds of distributions.

- [Normal Distribution Functions](#normal-distribution-functions)
    - [choose](#normal-choose)
    - [mean](#normal-mean)
    - [range](#normal-range)
- [Uniform Distribution Functions](#uniform-distribution-functions)
    - [choose](#uniform-choose)
    - [range](#uniform-range)
- [Custom Distribution Functions](#custom-distribution-functions)
    - [choose](#custom-choose)

### Normal Distribution Functions

These functions are based on the [Box-Muller transform](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform) to generate a random number with a [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution). They will generate a random result that tends towards the mean.

#### choose(array[, deviations]) {#normal-choose}

Returns a random element from a given array.
- `array`: the array from which to choose an element.
- `deviations`: the amount of standard deviations within the allowed range of results. A small number will create a more uniform distribution, while a number greater than 4 will cause the chances of the elements at the beginning and end of the array to be negligible. It defaults to three. It won't accept any value smaller than 1.

```javascript
const list = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
rnd.normal.choose(list, 1) //Distribution will be closer to uniform
rnd.normal.choose(list, 4) //Distribution will lean very heavily toward 'e' and 'f'
```

#### mean(mean, deviation[, decimals]) {#normal-mean}

Generates a random number.
- `mean`: the mean of the distribution. The generated numbers will tend towards this value.
- `deviation`: the standard deviation of the distribution. The greater it is, the greater the variance will be.
- `decimals`: the amount of decimals that the generated number will have. It defaults to zero.

```javascript
rnd.normal.mean(10, 2)
rnd.normal.mean(100, 20, 1)
```

#### range(from, to[, decimals[, devs]]) {#normal-range}

Generates a random number within a given range.
- `from`: the smallest possible returned number.
- `to`: the lagest possible returned number.
- `decimals`: the amount of decimals that the generated number will have. It defauls to zero. If either `from` or `to` is a number with more decimal digits than `decimals`, the function will use that amount instead.
- `devs`: the amount of standard deviations within the allowed range of results. A small number will create a more uniform distribution, while a big number will reduce the chances of numbers on the fringes of the range to come up. It defaults to three. It won't accept any value smaller than 1.

The following code will return a random number from an approximately normal distribution with a mean of 10 and a standard deviation of 2, but always within the range 4-16:

```javascript
rnd.normal.range(4, 16)
```

### Uniform Distribution Functions

These functions will generate a random result with a [uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)) in which all possible results are equally likely.

#### choose(array) {#uniform-choose}

Returns a random element from a given array.
- `array`: the array from which to choose an element.

```javascript
const list = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
rnd.uniform.choose(list) //Same probabilities for all elements
```

#### range(from, to[, decimals]) {#uniform-range}

Generates a random number within a given range.
- `from`: the smallest possible returned number.
- `to`: the largest possible returned number.
- `decimals`: the amount of decimals that the generated number will have. It defaults to zero. If either `from` or `to` is a number with more decimal digits than `decimals`, the function will use that amount instead.

```javascript
rnd.uniform.range(1, 10)
rnd.uniform.range(2.5, 3.5)
rnd.uniform.range(2.5, 3.5, 2)
```

### Custom Distribution Functions

These functions allow the user to set a custom distribution and define the likeliness for each result to be returned.

#### choose(array, chance) {#custom-choose}

Returns a random element from a given array.
- `array`: the array from which to choose an element.
- `chance`: an array in which the cumulative chance for each element of `array` is given. The last element should be given a value of `100`.

This function takes two arrays of the same length. The first one are the values from which to return something. The second one describes how likely each result is to come up. In the following code, `cstmChoose` will return an element from `array`. `a` will have a 20% to be returned, `b`'s chance will be 30% (50 - 20) and `c`'s 50% (100 - 50).

```javascript
const rnd = require('randtools')

const array = [ "a", "b", "c" ]
const likelihood = [ 20, 50, 100 ]
const randElem = rnd.custom.choose(array, likelihood)
```

**Note** that if `array` is longer than `chance`, the elements with higher indexes will never be returned. Conversely, if `chance` is longer or if the last element is below 100, the function might return `undefined`

## Old API

The old API has been preserved for now for compatibility reasons, but will be deleted in the future. So it is advisable to write new code using the new API.

#### normal(mean, deviation[, decimals])

Alias of [normal.mean](#normal-mean).

```javascript
rnd.normal(10, 2)
```

#### normChoose(array[, devs])

Alias of [normal.choose](#normal-choose).

```javascript
const list = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
rnd.normChoose(list, 2)
```

#### normRange(from, to[, decimals[, devs]])

Alias of [normal.range](#normal-range)

```javascript
rnd.normRange(1, 2, 1, 2)
```

#### unifChoose(array)

Alias of [uniform.choose](#uniform-choose)

```javascript
rnd.unifChoose([ 'a', 'b', 'c' ])
```

#### unifRange(from, to[, decimals])

Alias of [uniform.range](#uniform-range)

```javascript
rnd.unifRange(0, 18)
```

#### cstmChoose(array, chance)

Alias of [custom.choose](#custom-choose)

```javascript
const array = [ 'a', 'b', 'c' ]
const likelihood = [ 10, 30, 100 ]
rnd.cstmChoose(array, likelihood)
```
