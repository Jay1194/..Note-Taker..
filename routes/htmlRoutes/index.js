 const path = require('');

 const router = require('express').Router();

 router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
 });

 module.exports = router;

 