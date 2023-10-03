
const {Schema,model} = require('mongoose');

const serversSchema = Schema({

    name:{
        type: String,
        require: [true, 'Dato obligatorio']
    },
    ip:{
        type: String,
        require: [true, 'Dato obligatorio']
    },
    hungerGames:{
        type: Boolean,
        
    },
    bedWars:{
        type: Boolean,
      
    },
    skyWars:{
        type: Boolean,
      
    },
    buildBattle:{
        type: Boolean,
       
    },
    skyBlock:{
        type: Boolean,
      
    },
    survival:{
        type: Boolean,
      
    },
    pvp:{
        type: Boolean,
      
    },
    eggWars:{
        type: Boolean,
     
    },
    creative:{
        type: Boolean,

    },
    prision:{
        type: Boolean,
     
    },
    access:{
        type: String,
        enum: ['Premium','noPremium'],
        require: [true, 'Dato obligatorio']
    },
    capacity:{
        type: Number,
        require: [true, 'Dato obligatorio']
    },
    status:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    version:{
        type: String,
        require: [true, 'Dato obligatorio']
    },
    plataform:{
        type: String,
        enum: ['Bedrock','Java'],
        require: [true, 'Dato obligatorio']
    },
    mods:{
        type: Object,
      
    },
    texture:{
        type: String,
  
    },
    shaders:{
        type: String,
       
    },
    map:{
        type: String,
       
    },
    description:{
        type: String,
    },
    category:{
        type: String,
        require: [true, "The category is obligatory"]
    },
    downloads:{
        type: String
    }
   
   

})

module.exports = model('servers', serversSchema)