'use strict'
/**
 * $ yarn test tests/iugu/post-subscriptions.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço post-subscriptions", () => {

    it ( `Deve retornar o ERRO ao tentar criar uma assinatura sem parâmetros`, async() => {

        await request( app )
        .post( `/v1/subscriptions` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 401 )
            expect( !!res.body.error ).toBe( true )
            expect( !!res.body.customer_name ).toBe( false )
        } )
    } )

    it ( `Deve retornar a criação de uma nova assinatura`, async() => {

        const subscriptionsData = {
	        "plan_identifier": "planoteste003",
        }

        await request( app )
        .post( `/v1/subscriptions` )
        .send( subscriptionsData )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( !!res.body.customer_name ).toBe( true )
        } )
    } )
} )
