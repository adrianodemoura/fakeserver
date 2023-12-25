'use strict'
/**
 * $ yarn test tests/system/get-citys-list.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço get-citys-list", () => {

    it ( `Deve retornar a lista de cidades`, async() => {

        await request( app )
        .get( "/get-citys-list" )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( typeof res.body ).toBe( 'object' )
            expect( res.body[0].codeUf ).toBe( 31 )
        } )
    } )

} )
