const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./blogRouter');

const app = express();

// log the http layer
app.use(morgan('common'));

// app.get('/', function(req, res) {
//   res.send('my blog');
// })

app.use('/blog-post', blogRouter);



app.listen(8080, function() {
  console.log('App listening on port 8080');
})