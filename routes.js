const express = require("express");

const Router = express.Router();

Router.get("/api/user", (req, res) => {
    res.render("index");
});

module.exports = Router;