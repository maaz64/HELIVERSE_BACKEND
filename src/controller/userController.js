const User = require("../models/user");
const ApiError = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, gender, domain, available, avatar } =
      req.body;

    if (
      [first_name, last_name, email, gender, domain, available, avatar].some(
        (field) => field?.trim() === ""
      )
    ) {
      return next(new ApiError(400, "All fields are required"));
    }

    const user = await User.create({
      first_name,
      last_name,
      email,
      gender,
      domain,
      available,
      avatar,
    });

    if (!user) {
      return next(
        new ApiError(500, "Something went wrong while creating user")
      );
    }

    return res
      .status(201)
      .json(ApiResponse(true, user, "User created successfully"));
  } catch (error) {
    return next(new ApiError(500, "Something went wrong while creating user"));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, available } = req.body;
    if (!first_name && !last_name && available == "") {
      return next(new ApiError(400, "Updation fields are required"));
    }
    const user = await User.findById(id);
    if (!user) {
      return next(new ApiError(404, "No User Found"));
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        first_name: first_name ? first_name : user.first_name,
        last_name: last_name ? last_name : user.last_name,
        available: available == "" ? user.available : available,
      },
      { new: true }
    );

    if (!updatedUser) {
      return next(
        new ApiError(500, "Something went wrong while updating user")
      );
    }

    return res
      .status(200)
      .json(ApiResponse(true, updatedUser, "User updated successfully"));
  } catch (error) {
    return next(new ApiError(500, "Something went wrong while updating user"));
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return next(new ApiError(404, "User Not Found"));
    }
    return res
      .status(200)
      .json(ApiResponse(true, deletedUser, "User deleted successfully"));
  } catch (error) {
    return next(new ApiError(500, "Something went wrong while deleting user"));
  }
};
const getAllUser = async (req, res, next) => {
  try {
    const resultsPerPage = 20;
    let page = req.query.page >= 1 ? req.query.page : 1;

    page = page - 1;

    const users =await User.find({})
    .sort("-createdOn")
    .limit(resultsPerPage)
    .skip(resultsPerPage * page);

    if(users.length == 0){
      return next(new ApiError(404, "No User Found"));

    }

    return res
    .status(200)
    .json(ApiResponse(true, users, `All the user of page ${page+1} fetched successfully`));
    


  } catch (error) {
    return next(new ApiError(500, "Something went wrong while fetching the user"));

  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return next(new ApiError(404, "User Not found"));
    }

    return res
      .status(200)
      .json(ApiResponse(true, user, "User fetched successfully"));
  } catch (error) {
    return next(new ApiError(500, "Something went wrong fetching  user"));
  }
};

const getFilteredUser = async(req,res,next)=>{
  try {
    const {name, domain, gender, availabilty} = req.body;

    if (!name && !domain && !gender && !availabilty) {
      return next(new ApiError(400, "All fields are required"));
    }

    let users;
    if(name && !domain && !gender && !availabilty){
      users = await User.find({
        $or: [
          { first_name: name },
          { last_name: name },
          
        ], 
      })
    }
    else if(!name && domain && !gender && !availabilty){
      users = await User.find({
        domain 
      })
    }
    else if(!name && !domain && gender && !availabilty){
      users = await User.find({
        gender 
      })
    }
    else if(!name && !domain && !gender && availabilty){
      users = await User.find({
        available: availabilty=="Available"?true:false
      })
    }
    else if(name && domain && !gender && !availabilty){
      users = await User.find({
        $and: [
          { first_name: name },
          { domain},
        ],
      })
    }
    else if(name && !domain && gender && !availabilty){
      users = await User.find({
        $and: [
          { first_name: name },
          { gender},
        ],
      })
    }
    else if(name && !domain && !gender && availabilty){
      users = await User.find({
        $and: [
          { first_name: name },
          { available: availabilty=="Available"?true:false},
        ],
      })
    }
    else if(!name && domain && gender && !availabilty){
      users = await User.find({
        $and: [
          { domain },
          { gender},
        ],
      })
    }
    else if(!name && domain && !gender && availabilty){
      users = await User.find({
        $and: [
          { domain },
          { available: availabilty=="Available"?true:false},
        ],
      })
    }
    else if(!name && !domain && gender && availabilty){
      users = await User.find({
        $and: [
          { gender },
          { available: availabilty=="Available"?true:false},
        ],
      })
    }else if(!name && domain && gender && availabilty){
      users = await User.find({
        $and: [
          { gender },
          { domain },
          { available: availabilty=="Available"?true:false},
        ],
      })
    }
    else if(name && domain && gender && !availabilty){
      users = await User.find({
        $and: [
          { gender },
          { domain },
          { first_name:name},
        ],
      })
    }
    else{

    users = await User.find({
      $and: [
        { first_name: name },
        { domain},
        { gender},
        {available: availabilty=="Available"?true:false}
      ], 
    });
    }
    if(users.length == 0){
      return next(new ApiError(404, "No User Found"));
    }

    return res.status(200).json(ApiResponse(true, users, "Filtered Users"))
  } catch (error) {
    return next(new ApiError(500, "Something went wrong while filtering the users"));
    
  }
}

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  getFilteredUser
};
