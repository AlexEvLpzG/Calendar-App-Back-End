/*
    * Event Router
    * /api/events
*/
const { Router } = require( 'express' );
const { validateJWT } = require('../middlewares/validateJWT');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

router.get( '/', validateJWT, getEvents );

router.post( '/', validateJWT, createEvent );

router.put( '/:id', validateJWT, updateEvent );

router.delete( '/:id', validateJWT, deleteEvent );

module.exports = router;
