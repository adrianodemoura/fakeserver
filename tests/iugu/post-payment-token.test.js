'use strict'
/**
 * $ yarn test tests/iugu/post-payment-token.test.js
 */
const request = require( 'supertest' )
const app = require( '../../src/app' )

describe( "sobre o serviço post-payment-token", () => {

    it ( `Deve retornar o ERRO ao tentar criar uma cobrança direta sem parâmetros`, async() => {

        await request( app )
        .post( `/v1/payment-token` )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 401 )
            expect( !!res.body.error ).toBe( true )
            expect( !!res.body.credit_card ).toBe( false )
        } )
    } )

    it ( `Deve retornar a criação de uma nova assinatura`, async() => {

        const paymentTokenData = {
	        "method": "credit_card",
        }

        await request( app )
        .post( `/v1/payment-token` )
        .send( paymentTokenData )
        .set( "Content-type", "application/json" )
        .set( "Authorization", `Basic ${process.env.APP_TOKEN_IUGU}` )
        .then( ( res ) => {
            expect( res.status ).toBe( 200 )
            expect( !!res.body.method ).toBe( true )
        } )
    } )
} )
