const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
// const sendEmail = require("../utils/sendEmail");
const db = require("../models");
const Match = db.match;

exports.getMatch = (req, res, next) => {
    res.status(200).json({
        success: true,
        mes: 'Oke la',
      });
};

exports.setMatch = (req, res, next) => {

    res.status(200).json({
        success: true,
        mes: req.body,
      });

};

