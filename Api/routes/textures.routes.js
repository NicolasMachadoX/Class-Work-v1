const {Router} = require('express');
const { getAll,getByID, getByName, getByIp, getByVersion, getMorePopular, getLessPopular, getModsByName, getShadersByName, getDescription, getByCategory, post, deleteById, updateById  } = require('../controllers/maps.controllers');

const router = Router();

router.get('/getAll', getAll)
.get('/getId/:id', getByID)
.get('/getName', getByName)
.get('/getIp', getByIp)
get('/getCode/:code', getByCode)
.get('/getVersion', getByVersion)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.get('/getMods/:mod', getModsByName)
.get('/getShaders/:shader', getShadersByName)
.get('/getDescription/:code', getDescription)
.get('/getCategory/:category', getByCategory)
.post('/post', post)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)
module.exports = router;