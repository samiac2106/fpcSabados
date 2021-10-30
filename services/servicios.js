//importo el modelo de datos

const JugadorModelo=require('../models/JugadorModelo.js')

//servicio para agregar un documento a la bd
async function insertarJugador(datosJugador){

let jugadorAInsertar=new JugadorModelo(datosJugador)

return await jugadorAInsertar.save()

}

//servicio para buscar un dato de la BD

async function leerJugador(id){

let jugador= await JugadorModelo.findById(id)
return jugador 

}

//servicio para buscar todos los datos

async function leerJugadores(){

    let jugadores=await JugadorModelo.find()
    return jugadores 

}

//servicio para editar un documento 
async function modficarJugador(id,datos){

    return await JugadorModelo.findByIdAndUpdate(id,datos)

}

//servicio para eliminar un documento

async function borrarJugador(id){

    return await JugadorModelo.findByIdAndDelete(id)



}






module.exports={
    insertarJugador, leerJugador, leerJugadores,modficarJugador,borrarJugador
}