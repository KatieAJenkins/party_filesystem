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
else if (cmd ==="create"){
  fs.readFile(guestsPath, 'utf8', function(readErr, data){
    if (readErr){
      throw readErr;
    }
    var guests = JSON.parse(data);
    var guest = process.argv[3];

    if(!guest) {
      console.error(`Usage: ${node} ${file} ${cmd} GUEST`);
      process.exit(1);
    }
    guests.push(guest);

        var guestsJSON = JSON.stringify(guests);

        fs.writeFile(guestsPath, guestsJSON, function(writeErr) {
          if (writeErr) {
            throw writeErr;
          }

          console.log(guest);
        });
      });
    }
 else {
  console.error(`Usage: ${node} ${file} read`);
  process.exit(1);
}
