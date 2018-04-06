var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/local", {native_parser:true});
exports.db = db;