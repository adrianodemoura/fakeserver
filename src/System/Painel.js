'use strict'

class PainelController {

    async index(req, res) {
        return res.status(200).json({
            'aplicação': process.env.APP_NAME,
            'ambiente': process.env.NODE_ENV,
            'host': process.env.HOST,
            'porta' : process.env.APP_PORT, 
            'versão': process.env.VERSION, 
            'debug': process.env.DEBUG,
            'user-agent': process.env.USER_AGENT
        })
    }
}

module.exports = new PainelController()