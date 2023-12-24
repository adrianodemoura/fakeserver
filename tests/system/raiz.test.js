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
        .then( ( res ) => {
            expect( res.body.message ).toBe(  'O Token não foi informado!' )
            expect( res.status ).toBe( 403 )
        } )
    } )

} )
