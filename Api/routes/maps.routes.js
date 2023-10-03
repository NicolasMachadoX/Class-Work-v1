const router = require('express').Router();

const { getAll,getByID, getByName, getByVersion, getMorePopular, getLessPopular, getModsByName, 
    getShadersByName, getTexturesByName, getDescriptionByCode, getByCategory, post, updateById, deleteById } = require('../controllers/maps.controllers');

router.get('/getAll', getAll)
.get('/getId/:id', getByID)
.get('/getMaps/:name', getByName)
.get('/getVersion', getByVersion)
.get('/getCode/:code', getByCode)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.get('/getMods/:name', getModsByName)
.get('/getShaders/:name', getShadersByName)
.get('/getTextures/:name', getTexturesByName)
.get('/getDescription/:code', getDescriptionByCode)
.get('/getCategory/:category', getByCategory)
.post('/post', post)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)

module.exports = router;