'use strict'

class PainelController {

    async index(req, res) {
        const resume = JSON.parse( await getFile( 'System/Response/raiz' ) )

        resume["aplicação"] = process.env.APP_NAME
        resume["ambiente"] = process.env.NODE_ENV
        resume["host"] = process.env.HOST
        resume["porta"] = process.env.APP_PORT
        resume["versão"] = process.env.VERSION
        resume["debug"] = process.env.DEBUG
        resume["user-agent"] = process.env.USER_AGENT

        return res.status( 200 ).json( resume )
    }

    async getCitysList( req, res ) {

        const resume = JSON.parse( await getFile( 'System/Response/get-citys-list' ) )

        return res.status( 200 ).json( resume )
    }
}

module.exports = new PainelController()