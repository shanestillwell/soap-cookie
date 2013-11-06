# SOAP Cookie Authentication

> Use cookies as a security method for [node-soap]()


**CAVEAT** This is dependant on `lastResponseHeaders` [#183](https://github.com/milewise/node-soap/pull/183) and currently it is waiting to be merged into the main soap module


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
