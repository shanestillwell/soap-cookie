/**
 * Use cookies as a security option for connecting to SOAP
 *
 * @param {Object} headers
 *
 */
var Cookie = module.exports = exports = function Cookie(headers) {
  // Force new even if they didn't use 'new'
  if ( !(this instanceof Cookie) ) {
    return new Cookie(headers);
  }

  this.cookies = this.getCookies(headers);
};

/**
 * Required method for SOAP
 *
 * @param {Object} headers
 */
Cookie.prototype.addHeaders = function(headers) {
  headers['Cookie'] = this.cookies;
};

/**
 * Required method for SOAP
 *
 * @returns {String}
 */
Cookie.prototype.toXML = function() {
  return '';
};

/**
 * Parse a headers object and extract the cookies into a string
 *
 * @param {Object} headers
 *
 * @returns {String}
 */
Cookie.prototype.getCookies = function(headers) {

  // Nothing to do
  if (!headers) {
    return '';
  }

  var cookies = [],
      resCookies = headers['set-cookie'] || [];

  for (var i = 0; i < resCookies.length; i++) {
    var cookie = resCookies[i].split(';');
    cookies.push(cookie[0]);
  }

  return cookies.join('; ');
};

