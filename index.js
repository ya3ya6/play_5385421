const express = require('express');
const app = express();
app.use(express.static('.'));
app.get('/', function(req, res){
   res.send('hey');
});
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT || 3000, () => {
  console.log('listening on port ' + PORT);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

