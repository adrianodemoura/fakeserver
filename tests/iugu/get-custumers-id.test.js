'use strict'
/**
 * $ yarn test tests/iugu/get-plans.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço get-costumers-id", () => {

    it ( `Deve retornar o dados de um client`, async() => {

        const params = {
            id: 'B13E21F983754C3DA24DFBA97C685DD2'
        }

        await request( app )
        .get( `/v1/customers/${params.id}` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {

            expect( res.status ).toBe( 200 )
            expect( res.body.id ).toBe( params.id )
        } )
    } )
} )
