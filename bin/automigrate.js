'use strict';
var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
var models = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'Bookmark'];

ds.autoupdate(models, function(err) {
  if (err) throw err;
  console.log('Successfully created model:', models.join(', ') + '.');
});
