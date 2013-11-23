(function() {
  var root, _getURL, _request, _xhr;

  root = typeof exports !== "undefined" && exports !== null ? exports : (this.conversion = {});

  _getURL = function(currency) {
    return "http://api.coindesk.com/v1/bpi/currentprice/" + currency + ".json";
  };

  root.currenciesList = {
    "AED": ["UAE Dirham", "United Arab Emirates (UAE)"],
    "ALL": ["Albanian Lek", "Albania"],
    "ARS": ["Argentine Peso", "Argentina"],
    "AUD": ["Australian Dollar", "Australia, Kiribati, Nauru"],
    "BGN": ["Bulgarian Lev", "Bulgaria"],
    "BRL": ["Brazilian Real", "Brazil"],
    "BSD": ["Bahamian Dollar", "Bahamas"],
    "CAD": ["Canadian Dollar", "Canada"],
    "CHF": ["Swiss Franc", "Liechtenstein, Switzerland"],
    "CLP": ["Chilean Peso", "Chile"],
    "CNY": ["Chinese Yuan (Renminbi)", "China"],
    "COP": ["Colombian Peso", "Colombia"],
    "CRC": ["Costa Rican Colon", "Costa Rica"],
    "CUP": ["Cuban Peso", "Cuba"],
    "CZK": ["Czech Koruna", "Czech Republic"],
    "DKK": ["Danish Krone", "Denmark, Faroe Islands, Greenland"],
    "DOP": ["Dominican Peso", "Dominican Republic"],
    "EGP": ["Egyptian Pound", "Egypt"],
    "EUR": ["Euro", "Andorra, Austria, Belgium, Cyprus, Finland, France, Germany, Greece, Ireland, Italy, Luxembourg, Malta, Monaco, Netherlands, Portugal, Slovakia, Slovenia, Spain"],
    "GBP": ["British Pound", "England, Northern Ireland, Scotland, United Kingdom (UK), Wales"],
    "HKD": ["Hong Kong Dollar", "Hong Kong"],
    "HRK": ["Croatian Kuna", "Croatia"],
    "HUF": ["Hungarian Forint", "Hungary"],
    "IDR": ["Indonesian Rupiah", "Indonesia, East Timor"],
    "ILS": ["Israeli Shekel", "Israel"],
    "INR": ["Indian Rupee", "Bhutan, India"],
    "IRR": ["Iranian Rial", "Iran"],
    "ISK": ["Icelandic Krona", "Iceland"],
    "JMD": ["Jamaican Dollar", "Jamaica"],
    "JOD": ["Jordanian Dinar", "Jordan"],
    "JPY": ["Japanese Yen", "Japan"],
    "KHR": ["Cambodian Riel", "Cambodia"],
    "KRW": ["South Korean Won", "South Korea"],
    "KZT": ["Kazakhstani Tenge", "Kazakhstan"],
    "LAK": ["Lao Kip", "Laos"],
    "MAD": ["Moroccan Dirham", "Morocco, Western Sahara"],
    "MOP": ["Macanese Pataka", "Macau"],
    "MXN": ["Mexican Peso", "Mexico"],
    "MYR": ["Malaysian Ringgit", "Malaysia"],
    "NGN": ["Nigerian Naira", "Nigeria"],
    "NOK": ["Norwegian Krone", "Norway"],
    "NZD": ["New Zealand Dollar", "New Zealand"],
    "PEN": ["Peruvian Nuevo Sol", "Peru"],
    "PHP": ["Philippine Peso", "Philippines"],
    "PKR": ["Pakistani Rupee", "Pakistan"],
    "PLN": ["Polish Zloty", "Poland"],
    "QAR": ["Qatari Riyal", "Qatar"],
    "RON": ["Romanian Leu", "Romania"],
    "RUB": ["Russian Ruble", "Russia"],
    "SAR": ["Saudi Riyal", "Saudi Arabia"],
    "SEK": ["Swedish Krona", "Sweden"],
    "SGD": ["Singapore Dollar", "Singapore"],
    "THB": ["Thai Baht", "Thailand"],
    "TND": ["Tunisian Dinar", "Tunisia"],
    "TRY": ["Turkish Lira", "Turkey"],
    "TWD": ["Taiwan Dollar", "Taiwan"],
    "UAH": ["Ukrainian Hryvnia", "Ukraine"],
    "USD": ["US Dollar", "Ecuador, El Salvador, Micronesia, Palau, Panama, Puerto Rico, United States of America (USA)"],
    "UYU": ["Uruguayan Peso", "Uruguay"],
    "VEF": ["Venezuelan Bolivar", "Venezuela"],
    "VND": ["Vietnamese Dong", "Vietnam"],
    "XCD": ["East Caribbean Dollar", "Anguilla, Antigua and Barbuda, Dominica, Grenada, Montserrat, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines"],
    "ZAR": ["South African Rand", "Lesotho, Namibia, South Africa"],
    "XAG": ["Silver", "Silver"],
    "XAU": ["Gold", "Gold"]
  };

  root.fromBTC = function(amount, currency, callback) {
    var url;
    url = _getURL(currency);
    return _request('GET', url, function(err, response) {
      var exchangeRate, json;
      try {
        json = JSON.parse(response);
        exchangeRate = json.bpi[currency].rate_float;
        return callback(null, (amount * exchangeRate).toFixed(2));
      } catch (_error) {
        err = _error;
        return callback(err, null);
      }
    });
  };

  _request = function(method, url, callback) {
    var request;
    request = _xhr();
    request.open(method, url, true);
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200) {
          return callback(false, request.responseText);
        } else {
          return callback(true, null);
        }
      }
    };
    return request.send(null);
  };

  _xhr = function() {
    var request;
    if (typeof ActiveXObject !== "undefined" && ActiveXObject !== null) {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (typeof XMLHttpRequest !== "undefined" && XMLHttpRequest !== null) {
      request = new XMLHttpRequest();
    } else if (typeof require !== "undefined" && require !== null) {
      request = new (require('xmlhttprequest').XMLHttpRequest);
    }
    return request;
  };

}).call(this);
