rates = require '../lib/bitcoin-exchange-rates'

btcAmount = 0.100172

# Loop over all available currencies
Object.keys(rates.currenciesList).forEach (currency, key) ->
    rates.fromBTC btcAmount, currency, (err, amount) ->
      console.log "#{btcAmount} BTC = #{amount} #{currency}"
