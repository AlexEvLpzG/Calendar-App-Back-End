const { response } = require( 'express' );
const { validationResult } = require( 'express-validator' );

const createUser = ( req, res = response ) => {
    const { name, email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
}

const loginUser = ( req, res = response ) => {
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