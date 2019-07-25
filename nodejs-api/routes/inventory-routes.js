const express = require("express");
const inventoryDal = require("../dal/inventory-dal");

const inventoryRoutes = express.Router();

inventoryRoutes.get("/:type", (req, res) => {
    let promise = inventoryDal.getAllInventory(req.params.type);
    promise.then(
        inventory => res.json(inventory),
        reason => res.json(reason)
    )
});

module.exports = inventoryRoutes;