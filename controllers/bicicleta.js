const Bicicleta = require("../models/bicicleta");

exports.list = async function (req, res) {
    console.log("En el controlador de lista");
    res.render("index", { bicis: await Bicicleta.listAll()});
};

exports.apiList = function (req, res) {
    res.json(Bicicleta.allBicis);
};

exports.show = async function (req, res) {
    var bici = await Bicicleta.findById(req.params.id);
    // console.log(bici);
    res.render("show", { bici });
};

exports.create_get = function (req, res) {
    res.render("create");
};

exports.create_post = async function (req, res) {
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    await Bicicleta.add(bici);
    res.redirect("/");
};

exports.update_get = async function (req, res) {
    let bici = await Bicicleta.findById(req.params.id);
    console.log(bici);
    res.render("update", { bici });
};

exports.update_post = function (req, res) {
    var newBici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    Bicicleta.update(req.params.id, newBici);
    res.redirect("/");
};


exports.delete = async function (req, res) {
    await Bicicleta.removeById(req.body.id);
    res.redirect("/");
};