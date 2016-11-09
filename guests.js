'use strict';

var fs = require ('fs'); //module requires file system mgmt
var path = require ('path'); //module requires file to connect to dir
var guestsPath = path.join(__dirname, 'guests.json'); //joins directory to file name

var node = path.basename(process.argv[0]);
var file = path.basename(process.argv[1]);
var cmd = process.argv[2];

if (cmd === 'read') {
fs.readFile(guestsPath, 'utf8', function(err, data){
  if (err) {
    throw err;
  }
  var guests = JSON.parse(data);

  console.log(guests); //returns empty array with no data
  });
}
else {
  console.error(`Usage: ${node} ${file} read`);
  process.exit(1);
};
