var path = require('path');
var nwDir = path.dirname(process.execPath);
var Datastore = require('nedb');
var db = new Datastore({ filename: path.join(nwDir, "db", 'main.db'),autoload:true });
