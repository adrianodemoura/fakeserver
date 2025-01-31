'use strict'
/**
 * $ yarn test tests/iugu/get-plans.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço get-custumers-list", () => {

    it ( `Deve retornar a lista de clientes`, async() => {

        await request( app )
        .get( `/v1/customers` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( res.body.totalItems ).toBe( 2 )
            expect( !!res.body.items ).toBe( true )
            expect( !!res.body.items[0] ).toBe( true )
            expect( !!res.body.items[3] ).toBe( false )
        } )
    } )
} )
