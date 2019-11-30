const Client = require('ftp');
const fs = require('fs');
const configFile = require('../serverCredentials.json');

const client = new Client();

fs.readFile('./dist/main.js', 'UTF-8', (err, data) => {
  if (err) {
    throw err;
  }
  client.on('ready', () => {
    client.put(data, '/www/main.js', (err) => {
      if (err) {
        throw err;
      }
      client.end();
    });
  });
});

// connect to localhost:21 as anonymous
const config = {
  host: configFile.host,
  user: configFile.username,
  password: configFile.password,
};
client.connect(config);
console.log('\x1b[35m%s\x1b[0m', 'Newest built deployed.');

