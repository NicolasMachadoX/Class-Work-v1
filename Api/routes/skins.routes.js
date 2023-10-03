const {Router} = require('express');
const {  } = require('../controllers/maps.controllers');

const router = Router();

router.get('/getAll', getAll)
.get('/getId/:id', getByID)
.get('/getName', getByName)
.get('/getCode/:code', getByCode)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.get('/getDescription/:code')
.get('/getCategory/:category', getByCategory)
.post('/post', post)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)
module.exports = router;