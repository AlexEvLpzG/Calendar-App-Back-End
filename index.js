const express = require( 'express' );
require( 'dotenv' ).config();

// Todo: Crear el servidor de express
const app = express();

// * Directorio Público
app.use( express.static('public') );

// * Rutas
app.use( '/api/auth', require( './routers/auth' ) );

// Todo: Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log( `Servidor Corriendo en el puerto ${ process.env.PORT }` );
});