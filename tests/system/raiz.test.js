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
            expect( res.status ).toBe( 200 )
            expect( res.body.porta ).toBe( process.env.APP_PORT )
            expect( res.body.ambiente ).toBe( process.env.NODE_ENV )
            expect( res.body.debug ).toBe( process.env.DEBUG )
            expect( res.body.versão ).toBe( process.env.VERSION )
        } )
    } )

} )
