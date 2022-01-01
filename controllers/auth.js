const { response } = require( 'express' );
const bcryptjs = require( 'bcryptjs' );
const User = require( '../models/User' );

const createUser = async( req, res = response ) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con la misma direccion E-mail'
            });
        }

        user = new User( req.body );

        // Todo: Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt );

        await user.save();

        res.status(201).json({
            ok: true,
            uuid: user.id,
            name: user.name
        });
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: true,
            msg: 'Por fabor hable con el administrador'
        });
    }
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