const express = require("express");
const router = express.Router();

const { controller } = require('./../controller')

//create
router.post('/', controller.createVehicle)

// join
router.post('/join',controller.join)


// vehicleList
router.get('/list',controller.vehicleList)

// view
router.get('/view/:id',controller.getvehicle)

//update
router.put('/update/:id',controller.updateVehicle)

//delete
router.delete('/delete/:id',controller.deleteVehicle)

module.exports = router;