const { Router } = require( "express" )

const AuthBasic = require( "./Midlewares/AuthBasic" )

const routes = new Router()

// SYSTEM
routes.get( "/",                              ( req, res ) => { require( `./System/Painel` ).index( req, res ) } )
routes.get( "/get-citys-list",     AuthBasic, ( req, res ) => { require( `./System/Painel` ).getCitysList( req, res ) } )
routes.get( "/v1",                            ( req, res ) => { require( `./System/Painel` ).index( req, res ) } )

// IUGU - GET
routes.get( "/v1/customers/*",     AuthBasic, ( req, res ) => { require( './Iugu/customers' ).getCustomersId( req, res )  } )
routes.get( "/v1/customers",       AuthBasic, ( req, res ) => { require( './Iugu/customers' ).getCustomers( req, res )  } )
routes.get( "/v1/plans/*",         AuthBasic, ( req, res ) => { require( './Iugu/customers' ).getPlanId( req, res )  } )
routes.get( "/v1/plans",           AuthBasic, ( req, res ) => { require( './Iugu/customers' ).getPlans( req, res )  } )
routes.get( "/v1/subscriptions",   AuthBasic, ( req, res ) => { require( './Iugu/customers' ).getSubscriptions( req, res )  } )
// IUGU - POST
routes.post( "/v1/customers",      AuthBasic, ( req, res ) => { require( './Iugu/customers' ).postCustomers( req, res )  } )
routes.post( "/v1/plans",          AuthBasic, ( req, res ) => { require( './Iugu/customers' ).postPlans( req, res )  } )
routes.post( "/v1/subscriptions",  AuthBasic, ( req, res ) => { require( './Iugu/customers' ).postSubscriptions( req, res )  } )
routes.post( "/v1/payment-token",  AuthBasic, ( req, res ) => { require( './Iugu/customers' ).postPaymentToken( req, res )  } )
routes.post( "/v1/charge",         AuthBasic, ( req, res ) => { require( './Iugu/customers' ).postCharge( req, res )  } )

module.exports = routes
