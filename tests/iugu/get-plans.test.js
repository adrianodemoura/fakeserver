'use strict'
/**
 * $ yarn test tests/iugu/get-plans.js
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

    it ( `Deve retornar o erro pela falta de token`, async() => {

        await request( app )
        .get( "/v1/plans" )
        .then( ( res ) => {
            expect( res.body.message ).toBe(  'O Token não foi informado!' )
            expect( res.status ).toBe( 403 )
        } )
    } )

    it ( `Deve retornar a mensagem de token errado`, async() => {

        await request( app )
        .get( "/v1/plans" )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic tokenerrado` )
        .then( ( res ) => {
            expect( res.body.message.indexOf( 'inválido' ) > 0 ).toBe( true )
            expect( res.status ).toBe( 401 )
        } )
    } )

    it ( `Deve retornar a lista de planos`, async() => {

        await request( app )
        .get( "/v1/plans" )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( res.body.totalItems ).toBe( 3 )
        } )
    } )
} )
