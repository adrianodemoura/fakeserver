'use strict'

class Customers {

    async index(req, res) {
        const resume = { message: 'aqui é iugu-customers...'}

        return res.status(200).json( resume )
    }

    async getCostumersId( req, res ) {

        if (! req.params[0] ) return this.getListCostumers(req, res )

        if ( req.params[0] !== 'B13E21F983754C3DA24DFBA97C685DD22') return res.status( 401 ).json( {'message': 'Id do cliente inválido'})

        const resume = JSON.parse( await getFile( 'Iugu/Response/get-costumers-id' ) )

        return res.status( 200 ).json( resume )
    }

    async getCostumers( req, res ) {
        const resume = JSON.parse( await getFile('Iugu/Response/get-costumers-list') )

        return res.status( 200 ).json( resume )
    }

    async getSubscriptions( req, res) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/get-subscriptions') )

        return res.status( 200 ).json( resume )
    }

    async getPlans( req, res ) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/get-plans' ) )

        return res.status( 200 ).json( resume )
    }

    async postCostumers( req, res ) {

        if(! req.body.name ) return res.status( 401 ).json( { 'error': 'Nome inválido!' } )
        if(! req.body.email ) return res.status( 401 ).json( { 'error': 'e-mail inválido!' } )

        const resume = JSON.parse( await getFile( 'Iugu/Response/post-costumers' ) )

        return res.status( 200 ).json( resume )
    }

    async postPlans( req, res ) {

        if(! req.body.name ) return res.status( 401 ).json( { 'error': 'Nome inválido!' } )
        if(! req.body.identifier ) return res.status( 401 ).json( { 'error': 'Identificador inválido!' } )

        const resume = JSON.parse( await getFile( 'Iugu/Response/post-plans' ) )

        return res.status( 200 ).json( resume )
    }

    async postSubscriptions( req, res ) {

        if(! req.body.plan_identifier ) return res.status( 401 ).json( { 'error': 'Identificador do Plano Inválido!' } )
        
        const resume = JSON.parse( await getFile( 'Iugu/Response/post-subscriptions' ) )

        return res.status( 200 ).json( resume )
    }

    async postPaymentToken( req, res ) {
        
        if(! req.body.method ) return res.status( 401 ).json( { 'error': 'Método inválido!' } )

        const resume = JSON.parse( await getFile( 'Iugu/Response/post-payment-token' ) )

        return res.status( 200 ).json( resume )
    }

    async postCharge(req, res) {

        if(! req.body.token ) return res.status( 401 ).json( { 'error': 'Token inválido!' } )

        const resume = JSON.parse( await getFile( 'Iugu/Response/post-charge' ) )

        return res.status(200).json( resume )
    }
}

module.exports = new Customers()