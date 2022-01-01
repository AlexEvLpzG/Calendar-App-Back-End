const mongoose = require( 'mongoose' );

const dbConnection = () => {
    mongoose.connect( process.env.DB_CNN, ( error ) => {
        if( error ){
            console.log(error);
            process.exit(1); // * Detener la app
        };

        console.log( 'DB Online' );
    });
}

module.exports = {
    dbConnection
}