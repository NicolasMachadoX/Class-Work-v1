const {Schema,model} = require('mongoose');

const userSchema = Schema({

    name:{
        type: String,
        require: [true, 'The name is necesary']
    },
    email:{
        type: String,
        require: [true, 'The email is necesary']
    },
    password:{
        type: String,
        require: [true, 'The password is necesary']
    },
    account:{
        type: String,
        require: [true, "The 'account' is necesary"],
        enum: ["Premium","noPremium"]

    },
    status:{
        type: Boolean,
        require: [true, "The status is necesary"]
    },
    skin:{
        type: String
    }

})

module.exports = model('users', userSchema);