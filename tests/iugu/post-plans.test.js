'use strict'
/**
 * $ yarn test tests/iugu/post-plans.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço post-plans", () => {

    it ( `Deve retornar o ERRO ao tentar criar um cliente sem name e e-mail`, async() => {

        await request( app )
        .post( `/v1/plans` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 401 )
            expect( !!res.body.error ).toBe( true )
            expect( !!res.body.name ).toBe( false )
        } )
    } )

    it ( `Deve retornar a criação de um novo plano`, async() => {

        const planData = {
            "name": "PlanoTest003",
	        "identifier": "planoteste003",
        }

        await request( app )
        .post( `/v1/plans` )
        .send( planData )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( !!res.body.identifier ).toBe( true )
        } )
    } )
} )
