/*
    * Rutas de Usuario /Auth
    * host + /api/auth
*/
const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
const router = Router();

const { createUser, loginUser, renewToken } = require( '../controllers/auth' );
const { validateFields } = require( '../middlewares/validateFields' );
const { validateJWT } = require( '../middlewares/validateJWT' );

router.post( '/register', 
    [
        check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'email', 'El Email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe de ser de minimo de 6 caracteres' ).isLength({ min: 6 }),
        validateFields
    ], 
    createUser 
);

router.post( '/login', 
    [
        check( 'email', 'El Email es obligatorio' ).isEmail(),
        check( 'password', 'El passowd debe de ser de minimo de 6 caracteres' ).isLength({ min: 6 }),
        validateFields
    ],
    loginUser 
);

router.get( '/renew', validateJWT, renewToken );

module.exports = router;