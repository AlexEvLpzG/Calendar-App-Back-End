const express = require( 'express' );
require( 'dotenv' ).config();
const { dbConnection } = require('./database/config');
const cors = require( 'cors' );

// Todo: Crear el servidor de express
const app = express();

// * Base de datos
dbConnection();

// * Cors
app.use( cors() );

// * Directorio Público
app.use( express.static('public') );

// * Lectura y parseo del body
app.use( express.json() );

// * Rutas
app.use( '/api/auth', require( './routers/auth' ) );
app.use( '/api/events', require( './routers/events' ) );

// Todo: Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log( `Servidor Corriendo en el puerto ${ process.env.PORT }` );
});