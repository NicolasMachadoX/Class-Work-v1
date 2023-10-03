const {Router} = require('express');
const { getAll, getByID, getByVersion, post, updateById, deleteById } = require('../controllers/version.controllers');

const router = Router();

router.get('/getAll', getAll)
.get('/getId/:id', getByID)
.get('/getVersion/:version', getByVersion)
.post('/post', post)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)
module.exports = router;