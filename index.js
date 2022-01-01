const express = require( 'express' );
require( 'dotenv' ).config();
const { dbConnection } = require('./database/config');

// Todo: Crear el servidor de express
const app = express();

// * Base de datos
dbConnection();

// * Directorio Público
app.use( express.static('public') );

// * Lectura y parseo del body
app.use( express.json() );

// * Rutas
app.use( '/api/auth', require( './routers/auth' ) );

// Todo: Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log( `Servidor Corriendo en el puerto ${ process.env.PORT }` );
});