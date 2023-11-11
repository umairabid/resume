const express = require('express')
const path = require("path");
const fs = require('fs/promises');
const app = express()
const port = 9000


const webpack = require('webpack');
const webpack_dev_middleware = require('webpack-dev-middleware');
const webpack_compiler = webpack(require('./webpack.config.js'))

app.use(webpack_dev_middleware(webpack_compiler, {}));

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {

  fs.readFile('./content/index.json', 'utf8')
  .then((data) => {
    res.render('index', JSON.parse(data))
  })
  .catch((error) => {
    console.log(error)
    res.send('Error happened')
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
