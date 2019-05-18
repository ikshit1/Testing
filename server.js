const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const language = require('./routes/language');

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', ejs);
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', language);

// app.get('/', function(req, res, next){
//     res.send('first page');
// });

app.get('/', function(req, res, next){
    res.render('dist/index.html');
});

app.listen(4600, (req, res) => {
    console.log('server running on port 4600');
})

module.exports = app;