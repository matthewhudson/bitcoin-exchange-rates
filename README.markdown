# Bitcoin Exchange Rates [![NPM version](https://badge.fury.io/js/bitcoin-exchange-rates.png)](http://badge.fury.io/js/bitcoin-exchange-rates)

#### Convert any Bitcoin amount to your preferred currency.

## Installation

Using [`npm`](http://npmjs.org/):

``` sh
$ npm [-g] install bitcoin-exchange-rates
```

In [Node.js](http://nodejs.org/):

``` javascript
var rates = require("bitcoin-exchange-rates");
```

## Synopsis

``` javascript
var btcAmount, currency, rates;

rates = require('../lib/bitcoin-exchange-rates');

btcAmount = 0.100172;

currency = 'USD';

rates.fromBTC(btcAmount, currency, function (err, rate) {
  console.log(btcAmount + " BTC = " + rate + " " + currency);
});
```

## API

### rates.fromBTC(amount, currency, callback(err[, amount]))

Convert an `amount` of Bitcoins to `currency`. 

## Author

| [![twitter/matthewgh](http://gravatar.com/avatar/e0f8435a3df533d64b09b8aee394b8d3?s=85)](https://twitter.com/matthewgh "Follow @matthewgh on Twitter") |
|---|
| [Matthew Hudson](http://matthewhudson.me/) |