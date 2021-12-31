const express = require( 'express' );

// Todo: Crear el servidor de express
const app = express();

// * Rutas
app.get( '/', ( req, res ) => {
    res.json({
        ok: true
    });
});

// Todo: Escuchar peticiones
app.listen( 4000, () => {
    console.log( 'Servidor Corriendo en el puerto 4000' );
});