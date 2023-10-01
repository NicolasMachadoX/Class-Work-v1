const {Router} = require('express');
const { getAll, getByID, updateById, deleteById, postUser, getByName } = require('../controllers/user.controllers');

const router = Router();

router
.get('/get', getAll)
.get('/get/:id', getByID)
.get('/getName/:user', getByName)
.post('/post', postUser)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById);

module.exports  = router;