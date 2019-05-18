var express = require('express');
var router = express.Router();
const translate = require('translate-google')

router.post('/language', function(req, res, next){
    // console.log('here12', req);
    translate(req.body.text, {to: req.body.language}).then(translate_lang => {
        res.send({
            'language': translate_lang
        })
    }).catch(err => {
        console.error(err)
    })
});

module.exports = router;
