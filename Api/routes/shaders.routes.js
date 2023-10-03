const router = require('express').Router();

const { getAll,getByID, getByName, getByVersion, getMorePopular, getLessPopular, getModsByName, 
     getTexturesByName, getDescriptionByCode, post, updateById, deleteById } = require('../controllers/shaders.controllers');

router.get('/getAll', getAll)
.get('/getId/:id', getByID)
.get('/getMaps/:name', getByName)
.get('/getVersion', getByVersion)
.get('/getCode/:code', getByCode)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.get('/getMods/:mod', getModsByName)
.get('/getTextures/:texture', getTexturesByName)
.get('/getDescription/:code', getDescriptionByCode)
.post('/post', post)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)

module.exports = router;