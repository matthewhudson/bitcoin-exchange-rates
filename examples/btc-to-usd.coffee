rates = require '../lib/bitcoin-exchange-rates'

btcAmount = 0.100172
currency = 'USD'

rates.fromBTC btcAmount, currency, (err, amount) ->
  console.log "#{btcAmount} BTC = #{amount} #{currency}"
