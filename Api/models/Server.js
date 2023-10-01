const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT

        this.path = {
            user: "/api/user",
            servers: "/api/servers",

        }

        this.middlewares()

        this.routes()

        this.ConnectionDB();
    }


    async ConnectionDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
        this.app.use(this.path.user, require('../routes/user.routes.js'));
        this.app.use(this.path.servers, require('../routes/servers.routes.js'));

    }



    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server it's running in the port: ${this.port}`);
        })
    }





}

module.exports = Server;