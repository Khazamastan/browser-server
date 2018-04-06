'use strict';

var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost:27017/local';
var url = require('url');


mongoose.connect(dbURI);

var testSchema = new mongoose.Schema({
  
});


function getBrowserData(req, res) {
  var browserList = {};
  var queryData = url.parse(req.url, true);
  console.log(queryData);
  var collectionName = queryData.path.split('/')[1].toLowerCase();
  console.log(collectionName);
  var Test = mongoose.model(collectionName, testSchema, collectionName);
  Test.find({},function(err, docs){
    console.log(docs);
    res.json(docs);
  });
}

function getBrowserWithId(req, res) {
    console.log("getbrowserithId");
    let id = req.params.id || 0,
        result = {};

     for (let i = 0; i < browser.length; i++) {
        if (browser[i].id == id) {
            result = browser[i];
            break;
        }
     }

     res.json(result);
}

module.exports = {
    getBrowserData: getBrowserData,
    getBrowserWithId: getBrowserWithId
};
