const jwt = require( "jsonwebtoken" )

module.exports = async ( req, res, next ) => {

    const auth = req.headers.authorization
    if ( auth !== undefined ) {
        const [, token] = auth.split( " " )
        const dataToken = jwt.decode( token )
    }

    if (! auth ) {
        return res.status( 403 ).json( { message: "O Token não foi informado!", 'headers': req.headers } )
    }

    try {
        const [, token] = auth.split( " " )

        jwt.verify( token, process.env.APP_SECRET )

        next()
    } catch ( error ) {
        let message = error.message

        if (error instanceof jwt.JsonWebTokenError) { message = `Token inválido!` }

        if (error instanceof jwt.TokenExpiredError) { message = `Token expirado!` }

        return res.status( 401 ).json( { status: 401, message } )
    }
}
