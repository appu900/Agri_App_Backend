const express = require("express");
const router = express.Router();
const v1Routs = require("./v1/index");

router.use("/v1", v1Routs);


module.exports = router;
