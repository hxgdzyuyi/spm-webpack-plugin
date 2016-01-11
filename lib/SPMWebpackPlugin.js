'use strict';

var SPMModuleParser = require('./SPMModuleParser');

function SPMWebpackPlugin(cwd) {
  cwd = cwd || process.cwd();
  this.cwd = cwd;
}

SPMWebpackPlugin.prototype.apply = function(compiler) {
  var cwd = this.cwd;
  compiler.resolvers.normal.plugin('module', function(request, callback) {
    return new SPMModuleParser(cwd, request, callback);
  });
};

module.exports = SPMWebpackPlugin;
