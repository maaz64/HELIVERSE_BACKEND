const Team = require('../models/team');
const User = require('../models/user');
const ApiError = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const createTeam = async(req,res,next)=>{
    return res
    .status(201)
    .json(ApiResponse(true, {}, "working on create team API"));
}

const getTeam = async(req,res,next)=>{

    return res
    .status(201)
    .json(ApiResponse(true, {}, "working on get team API"));
}


module.exports = {
    createTeam,
    getTeam
}