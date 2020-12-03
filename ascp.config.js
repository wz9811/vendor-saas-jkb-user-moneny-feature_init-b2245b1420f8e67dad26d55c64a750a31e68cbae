'use strict';
const path = require('path');

module.exports = {
  publish: {
    npm: false,
    buildDir: path.join(__dirname, 'build-tnpm'),
  },
  server: {},
  build: {},
};
