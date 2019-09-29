const express = require("express");
// const request = require("request");
// const CONSTANTS = require("../constants")
// const getSatData = require("../Helpers/HelperFunctions")
const router = express.Router();
 
// let userPostion = {
//     lat: 38.9072,
//     lng: -77.0369,
//     alt: 0
// }

// router.get('/getData', async (req, res) => {
//     //Getting Satellite data and converting to GEOJSON
//     const userPosition = {
//         lat: 38.9072,
//         lng: -77.0369,
//         alt: 0
//     };
//     const newSatData = await getSatData(userPosition);
//     try {
    
//     console.log(newSatData);
//         res.send(newSatData);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

module.exports = router;
