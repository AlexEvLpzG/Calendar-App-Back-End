/*
    * Event Router
    * /api/events
*/
const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
const { validateJWT } = require('../middlewares/validateJWT');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/events');
const { validateFields } = require('../middlewares/validateFields');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use( validateJWT );

router.get( '/', getEvents );

router.post( '/', 
    [
        check( 'title', 'El titulo es oblogatorio' ).not().isEmpty(),
        check( 'start', 'Fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'Fecha de finalización es obligatoria' ).custom( isDate ),
        validateFields
    ],   
    createEvent 
);

router.put( '/:id', 
    [
        check( 'title', 'El titulo es oblogatorio' ).not().isEmpty(),
        check( 'start', 'Fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'Fecha de finalización es obligatoria' ).custom( isDate ),
        validateFields
    ], 
    updateEvent 
);

router.delete( '/:id', deleteEvent );

module.exports = router;
