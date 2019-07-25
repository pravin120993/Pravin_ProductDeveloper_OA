const express = require("express");
const bodyPraser = require("body-parser");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventory-routes")

const app = express();
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended: false}));
app.use(cors());

app.use("/api/inventory", inventoryRoutes)

app.listen(9090, () => console.log("events services running on port 9090"));