const express = require('express');
const app = express();
app.use(express.static('.'));
app.get('/', function(req, res){
   res.send('hey');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT || 3000, () => {
  console.log('listening on port ' + PORT);
});
