const { Router } = require('express');
const router = Router();

//Router test
router.get('/', (req, res)=>{
    res.render('index.pug', {title: 'Home'});
});

module.exports = router;