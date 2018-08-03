// index.js

var server = require('auth-static');

server({
  options: {
    cache: 3600,
    gzip: true
  },
  password: 'furthermore',
  port: 1234,
  realm: 'Private',
  root: './dist',
  username: 'amex'
});
