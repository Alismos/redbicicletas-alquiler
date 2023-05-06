const Bicicleta = require("../../models/bicicleta");

exports.list = async function (req, res) {
    // hola = Bicicleta();
    console.log("Entrando a listar bicicletas (api)");
    lista = await Bicicleta.listAll();
    const listaBici = lista.map(bicicleta => {
        const nuevaBici = new Bicicleta(bicicleta.id, bicicleta.color, bicicleta.modelo, bicicleta.lat, bicicleta.lng);
        return nuevaBici;
    });
    res.json(lista);
};