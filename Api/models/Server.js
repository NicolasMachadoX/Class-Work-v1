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
            mods: "/api/mods",
            maps: "/api/maps",
            textures:"/api/textures",
            shaders: "/api/shaders",
            skins: "/api/skins",
            version: "/api/version"

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
        this.app.use(this.path.mods, require('../routes/mods.routes.js'));
        this.app.use(this.path.maps, require('../routes/maps.routes.js'));
        this.app.use(this.path.textures, require('../routes/textures.routes.js'));
        this.app.use(this.path.shaders, require('../routes/shaders.routes.js'));
        this.app.use(this.path.skins, require('../routes/skins.routes.js'));
        this.app.use(this.path.version, require('../routes/version.routes.js'));
    }



    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server it's running in the port: ${this.port}`);
        })
    }





}

module.exports = Server;