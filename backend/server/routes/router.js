const express = require("express");
const router = express.Router();
const NameController = require("../controller/NameController");

//get all names api endpoint
router.get("/get", NameController.getAllNames);

//get name by id api endpoint
router.get("/get/:id", NameController.getNameById);

//add name api endpoint
router.post("/add", NameController.addName);

//update name api endpoint
router.put("/update/:id", NameController.updateName);

//delete name api endpoint
router.delete("/delete/:id", NameController.deleteName);

module.exports = router;
