const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
})
app.post('/email_post', (req, res) => {
  console.log(req.body.email);
  res.send('<h1>WELCOME'+req.body.email+'</h1>');
})

app.listen(3000, () => {
  console.log('server is listening on port 3000!');
})

