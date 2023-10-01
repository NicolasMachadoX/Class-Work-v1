const UserCollection = require('../models/User.js');

const getAll = async (req,res) =>{
    try {
     const data = await UserCollection.find();
     res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}


const getByID = async (req,res) =>{
    try {
        const data = await UserCollection.findOne({_id:req.params.id});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const getByName = async (req,res) =>{
    try {
        const data = await UserCollection.findOne({name:req.params.user});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}



const deleteById = async (req,res) =>{
    try {
        const data = await UserCollection.deleteOne({_id:req.params.id});
        res.json({data: data})
    } catch (error) {
     res.status(404).json({msg:error})   
    }
}

const postUser = async(req,res) =>{
    
        const user = new User(req.body)
    try {

        const newUser = await user.save();
        return res.json(newUser);  
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
    getAll,postUser,getByID,deleteById,updateById, getByName
}