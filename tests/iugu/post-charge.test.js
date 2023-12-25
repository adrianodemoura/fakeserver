'use strict'
/**
 * $ yarn test tests/iugu/post-charge.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço post-charge", () => {

    it ( `Deve retornar o ERRO ao tentar criar um cliente sem parâmetros`, async() => {

        await request( app )
        .post( `/v1/charge` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 401 )
            expect( !!res.body.error ).toBe( true )
            expect( !!res.body.token ).toBe( false )
        } )
    } )

    it ( `Deve retornar a criação de um novo plano`, async() => {

        const chargeData = {
            "token": "akdsfjaklsdjfklajsdfkljasdl"
        }

        await request( app )
        .post( `/v1/charge` )
        .send( chargeData )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( !!res.body.token ).toBe( true )
        } )
    } )
} )
