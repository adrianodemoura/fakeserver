require( './general' )

const express = require( "express" )
const cors = require( "cors" )
const fs = require("fs")
const routes = require( "./routes" )

class App {
    constructor() {
        this.app = express()
        this.setVersion()
        this.bootstrap()
        this.routes()
    }

    bootstrap() {
        this.app.use( express.json() )
        this.app.use( (req, res, next) => {
            const methodsOk = ['GET', 'POST', 'DELETE', 'PUT']

            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Methods", methodsOk.join() )
            res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Accept, Origin, X-Requested-With" )
            if ( req.method === 'OPTIONS' ) {
                return res.status(204).json( { "message": "fica tranquilo, recebi sua requisição." } )
            }

            if ( !methodsOk.includes( req.method ) ) {
                return res.status(200).json( { "message": "método não permitido aqui!" } )
            }

            if ( req.path === '/favicon.ico' ) {
                return res.status(200).json( { "message": 'backEnd não precisa de favicon ...' } )
            }

            this.app.use( cors() )

            process.env.IP = (req.headers["x-forwarded-for"] || req.socket.remoteAddress).replace("::ffff:", "") || '127.0.0.1'
            process.env.ROTA = req.path

            const arrRota = req.path.split('/')
            process.env.HOST = req.headers.host
            process.env.USER_AGENT = req.headers['user-agent']
            process.env.MODULE = arrRota[1] || 'System'
            process.env.CONTROLLER = arrRota[2]?.replace(/-(.)/g, (match, group1) => group1.toUpperCase() ) || 'Painel'
            process.env.ACTION = arrRota[3] || 'index'
            process.env.ACTION = process.env.ACTION.toCamelCase()
            process.env.MODULE = process.env.MODULE.charAt(0).toUpperCase() + process.env.MODULE.substring(1,process.env.MODULE.length)
            process.env.CONTROLLER = process.env.CONTROLLER.charAt(0).toUpperCase() + process.env.CONTROLLER.substring(1,process.env.CONTROLLER.length)

            next()
        })
    }

    setVersion() {
        const ObjectPackage = JSON.parse( fs.readFileSync( "./package.json", "utf8") )
        process.env.VERSION = ObjectPackage.version
    }

    routes() {
        this.app.use(routes)
    }
}

module.exports = new App().app
