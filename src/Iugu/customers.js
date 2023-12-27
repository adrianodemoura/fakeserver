'use strict'

class Customers {

    async index(req, res) {
        const resume = { message: 'aqui é iugu-customers...'}

        return res.status(200).json( resume )
    }

    async getCustomersId( req, res ) {

        const resume = JSON.parse( await getFile( 'Iugu/Response/get-costumers-id' ) )

        return res.status( 200 ).json( resume )
    }

    async getCustomers( req, res ) {
        const resume = JSON.parse( await getFile('Iugu/Response/get-costumers-list') )

        return res.status( 200 ).json( resume )
    }

    async getSubscriptions( req, res) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/get-subscriptions') )

        return res.status( 200 ).json( resume )
    }

    async getPlanId( req, res ) {

        const resume = JSON.parse( await getFile( 'Iugu/Response/get-plan-id' ) )

        return res.status( 200 ).json( resume )
    }

    async getPlans( req, res ) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/get-plans' ) )

        return res.status( 200 ).json( resume )
    }

    async postCustomers( req, res ) {

        if(! req.body.name ) return res.status( 401 ).json( { 'error': 'Nome inválido!' } )
        if(! req.body.email ) return res.status( 401 ).json( { 'error': 'e-mail inválido!' } )

        const resume = JSON.parse( await getFile( 'Iugu/Response/post-customers' ) )

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