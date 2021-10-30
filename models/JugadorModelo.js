// importo las utilidades model y shema para hacer el modelo de datos 
const {model, Schema}=require('mongoose')

//programar mi modelo de datos 
const JugadorModelo= Schema({
    nombre:{
        type: String, 
        required: true 
    },
    edad: {
        type: String, 
        required: true 
    },
    posicion: {
        type: String, 
        required: true 
    },
    equipo: {
        type: String, 
        required: true 
    },
    camiseta: {
        type: Number, 
        required: true 
    },
    foto: {type: String, 
        required: true },

})

module.exports=model('jugadores',JugadorModelo)