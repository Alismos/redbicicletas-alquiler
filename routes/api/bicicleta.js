var express = require('express');
var router = express.Router();

// const bicicletaController = require("../../public/js/Controllers/BicicletaController");
const bicicletaController = require("../../controllers/api/bicicleta");


router.get("/", bicicletaController.list);

module.exports = router;
