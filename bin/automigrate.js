'use strict';
var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;

ds.autoupdate('Bookmark', function(err) {
  if (err) throw err;
  console.log('Created Model: Bookmark');
});
