const { Router } = require('express');
const router = Router();

const comunidad = [];

//Router test
router.get('/', (req, res)=>{
    res.send('Hello world');
});

module.exports = router;