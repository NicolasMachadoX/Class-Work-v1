const Servers = require('../models/ServersCollection')


const getAll = async (req,res) =>{
    try {
     const data = await Servers.find();
     res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}


const getByID = async (req,res) =>{
    try {
        const data = await Servers.findOne({_id:req.params.id});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByAcess = async (req,res) =>{
    try {
        const data = await Servers.find({access:req.body.query});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByIp = async (req,res) =>{
    try {
        const data = await Servers.findOne({ip:req.body.query});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByVersion = async (req,res) =>{
    try {
        const data = await Servers.find({version:req.body.query});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByName = async (req,res) =>{
    try {
        const data = await Servers.findOne({name:req.body.query});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByPlataform = async (req,res) =>{
    try {
        const data = await Servers.find({plataform:req.body.query});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByCapacity = async (req,res) =>{
    try {
        const data = await Servers.find({capacity:req.body.query});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}




const deleteById = async (req,res) =>{
    try {
        const data = await Servers.deleteOne({_id:req.params.id});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const postServer = async(req,res) =>{
    
        const server = new Servers(req.body)
    try {

        const newServer = await server.save();
        return res.json(newServer);  
    } catch (error) {
        res.status(404).json({msg:error})   
    }
}




const updateById = async (req, res) => {
    try {
        const user = await UserCollection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = {
    getAll,
    postServer,
    getByID,
    deleteById,
    updateById, 
    getByName, 
    getByAcess,
    getByIp, 
    getByVersion,
    getByPlataform,
     getByCapacity
}
