const {Router} = require('express');
const { getAll, getByID, getByName, postServer, updateById, deleteById, getByAcess, getByCapacity, getByVersion, getByIp, getByPlataform, getByMinigames } = require('../controllers/servers.controllers');

const router = Router();

router.get('/getAll', getAll)
.get('/getId/:id', getByID)
.get('/getName', getByName)
.get('/getIp', getByIp)
.get('/getAccess', getByAcess)
.get('/getCapacity', getByCapacity)
.get('/getVersion', getByVersion)
.get('/getPlataform', getByPlataform)
.post('/post', postServer)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)
module.exports = router;