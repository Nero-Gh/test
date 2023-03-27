const mongoose = require("mongoose");
const nameModel = require("../models/nameModel");

/**
 * Get all names
 */

exports.getAllNames = async (req, res) => {
  try {
    const names = await nameModel.find();
    res.status(200).json(names);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get data by id
 */

exports.getNameById = (req, res) => {
  nameModel
    .findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

/**
 * Add data to database
 */

exports.addName = (req, res) => {
  nameModel
    .create({ name: req.body.name })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

/**
 * Update data in database
 */

exports.updateName = (req, res) => {
  nameModel
    .findByIdAndUpdate(req.params.id, { name: req.body.name })
    .then((data) => {
      res.status(200).json({ message: "Name updated successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

/**
 * Delete data from database
 */

exports.deleteName = (req, res) => {
  nameModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(204).json({ message: "Name deleted successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
