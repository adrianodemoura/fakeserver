'use strict'

class Customers {

    async index(req, res) {
        const resume = { message: 'aqui é iugu-costomers...'}

        return res.status(200).json( resume )
    }

    async getCostumersId( req, res ) {

        if (! req.params[0] ) return this.getListCostumers(req, res )

        if (! req.params[0] === 'B13E21F983754C3DA24DFBA97C685DD22') return res.status( 401 ).json( {'message': 'Id do cliente inválido'})

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
        const resume = JSON.parse( await getFile( 'Iugu/Response/post-costumers' ) )

        return res.status( 200 ).json( resume )
    }

    async postPlans( req, res ) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/post-plans' ) )

        return res.status( 200 ).json( resume )
    }

    async postSubscriptions( req, res ) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/post-subscriptions' ) )

        return res.status(200).json( resume )
    }

    async postPaymentToken( req, res ) {
        const resume = JSON.parse( await getFile( 'Iugu/Response/post-payment-token' ) )

        return res.status(200).json( resume )
    }

    async postCharge(req, res) {
        const resume = JSON.parse( await getFile( 'uugu/Response/post-charge' ) )

        return res.status(200).json( resume )
    }
}

module.exports = new Customers()