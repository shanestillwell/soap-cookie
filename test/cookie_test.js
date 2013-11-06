var chai     = require('chai'),
    expect   = chai.expect,
    headers  = { date: 'Wed, 06 Nov 2013 18:28:48 GMT',
      p3p: 'CP="CAO PSA OUR"',
      'set-cookie':
        [ 'JSESSIONID=7944851A5E30BA94EBA12A21F3B9C7F3; Path=/',
      'BIGipServerwebproxy=2744756416.20480.0000; expires=Wed, 06-Nov-2013 18:40:30 GMT; path=/' ],
      'content-type': 'text/xml;charset=UTF-8',
      'content-length': '624',
      connection: 'close' };


var Cookie = require('../');

describe('cookie', function() {

  var cookie;

  before(function(){
    cookie = new Cookie();
  });
  it('should return Cookie when called without new', function() {
    expect(Cookie()).to.be.instanceof(Cookie);
  });

  it('should set cookies when headers passed in', function() {
    var cookie = new Cookie(headers);
    expect(cookie.cookies).to.contain('JSESSIONID');
  });

  it('should return blank for toXML', function(){
    expect(cookie.toXML()).to.be.blank;
  });

  it('should parse headers for cookies', function() {
    expect(cookie.getCookies(headers)).to.contain('JSESSION');
  });
});

