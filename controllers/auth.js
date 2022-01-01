const { response } = require( 'express' );
const { validationResult } = require( 'express-validator' );

const createUser = ( req, res = response ) => {
    const { name, email, password } = req.body;

    // Todo: manejo de errores
    const errors = validationResult( req );
    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
}

const loginUser = ( req, res = response ) => {
     // Todo: manejo de errores
    const errors = validationResult( req );
    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    
    res.status(201).json({
        ok: true,
        msg: 'login'
    });
}

const renewToken = ( req, res = response ) => {
    res.status(201).json({
        ok: true,
        msg: 'renew'
    });
} 

module.exports = {
    createUser,
    loginUser,
    renewToken
}