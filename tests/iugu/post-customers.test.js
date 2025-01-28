'use strict'
/**
 * $ yarn test tests/iugu/post-costumers.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço post-costumers", () => {

    it ( `Deve retornar o ERRO ao tentar criar um cliente sem name e e-mail`, async() => {

        await request( app )
        .post( `/v1/customers` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 401 )
            expect( !!res.body.error ).toBe( true )
            expect( !!res.body.id ).toBe( false )
        } )
    } )

    it ( `Deve retornar a criação de um novo cliente`, async() => {

        const clientData = {
            "name": "Segundo Cliente",
            "email": "segundo@cliente.com.br"
        }

        await request( app )
        .post( `/v1/customers` )
        .send( clientData )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( !!res.body.id ).toBe( true )            
        } )
    } )
} )
