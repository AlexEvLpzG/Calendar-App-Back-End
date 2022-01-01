/*
    * Rutas de Usuario /Auth
    * host + /api/auth
*/
const { Router } = require( 'express' );
const router = Router();

router.post( '/register', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'register'
    });
});

router.post( '/login', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'login'
    });
});

router.get( '/renew', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
});

module.exports = router;