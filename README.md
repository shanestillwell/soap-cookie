[![Build Status](https://travis-ci.org/shanestillwell/soap-cookie.png?branch=master)](https://travis-ci.org/shanestillwell/soap-cookie)

# SOAP Cookie Authentication

> Use cookies as a security method for [node-soap](https://github.com/milewise/node-soap)

## Install

`npm install soap-cookie`

## Usage

```javascript

var soap = require('soap'),
    Cookie = require('soap-cookie');

soap.createClient(WSDL, function(err, client) {
  client.login(USERNAME, PASSWORD, function(err, response) {

    // if login is successful
    client.setSecurity(new Cookie(client.lastResponseHeaders));

  });
});
```

Now subsequent SOAP calls will set the `Cookie` header and you'll be a happy chipmunk (except for the fact you have to deal with SOAP in the first place).
