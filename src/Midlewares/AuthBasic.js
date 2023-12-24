const jwt = require( "jsonwebtoken" )

module.exports = async ( req, res, next ) => {

    const auth = req.headers.authorization

    if (! auth ) { return res.status( 403 ).json( { message: "O Token não foi informado!", 'headers': req.headers } ) }

    try {
        const [, token] = auth.split( " " )

        if ( token !== process.env.APP_TOKEN_IUGU ) { throw { message: 'Token inválido, não corresponde ao que lhe passamos!' } }

        next()
    } catch ( error ) {
        let message = error.message

        if (error instanceof jwt.JsonWebTokenError) { message = `Token inválido!` }

        if (error instanceof jwt.TokenExpiredError) { message = `Token expirado!` }

        return res.status( 401 ).json( { status: 401, message } )
    }
}