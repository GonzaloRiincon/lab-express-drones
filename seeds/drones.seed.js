// Iteration #1


const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

const connectionString = 'mongodb://127.0.0.1:27017/drones'

mongoose
    .set('strictQuery', false)
    .connect(connectionString)

    .then(() => {
        return Drone.insertMany(drones)
    })
    .then(drones => {
        console.log('Se han creado', drones.length, 'drones')
    })
    .finally(() => {
        mongoose.connection.close()
    })
    .catch(() => console.log('Error en conexión'))