'use strict'
/**
 * $ yarn test tests/system/raiz.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço get-plans", () => {
    beforeAll ( async() => {
        // 
    } ) 

    afterAll( async() => {
        // 
    } )

    it ( `Deve retornar o JSON da tela principal`, async() => {

        await request( app )
        .get( "/" )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( !!res.body.debug.length ).toBe( true )
            expect( res.status ).toBe( 200 )
        } )
    } )

} )
