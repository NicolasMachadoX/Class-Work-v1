const Collection = require('../models/Version.js');

const getAll = async (req,res) =>{
    try {
     const data = await Collection.find();
     res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}


const getByID = async (req,res) =>{
    try {
        const data = await Collection.findOne({_id:req.params.id});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByName = async (req,res) =>{
    try {
        const data = await Collection.findOne({name:req.params.user});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}



const deleteById = async (req,res) =>{
    try {
        const data = await Collection.deleteOne({_id:req.params.id});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const post = async(req,res) =>{
    
        const data = new Collection(req.body)
    try {

        const newData = await data.save();
        return res.json(newData);  
    } catch (error) {
        res.status(404).json({msg:error})   
    }
}




const updateById = async (req, res) => {
    try {
        const data = await Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(data);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = {
    getAll,post,getByID,deleteById,updateById, getByName
}