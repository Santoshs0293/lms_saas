if (process.env.NODE_ENV === 'production') {
    // Use production keys
    module.exports = require('./prod');
  } else {
    // Use development keys
    module.exports = require('./dev');
  }
  