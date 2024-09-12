const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../middlewares/sendEmail");
const { message, MemberMessage } = require("../helper/emailMessage");
const { OtpGenerator } = require("../helper/otpGenrator");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
  try {
    if (!req.body.account || !req.body.account.email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const { email, password, cnfPassword } = req.body.account;

    const user = await User.findOne({ 'account.email': email });
    if (user) {
      return res
        .status(409)
        .json({ message: "This email already exists. Please login." });
    }

    if (password !== cnfPassword) {
      return res.status(401).json({ message: "Passwords do not match." });
    }

    const newUser = new User(req.body);
    // await sendEmail(MemberMessage(newUser),email,"Congratultions, Your account has been created by Anyma");
    await newUser.save();
    res.status(201).json( "Your account is successfully created." );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};


const login = async (req, res) => {
  try {
    const user = await User.findOne({ "account.email": req.body.email }); 
    if (!user) {
      return res
        .status(404)
        .json({ message: "Your account does not exist. Please sign up." });
    }

    const isMatched = await user.comparePassword(req.body.password);
    if (!isMatched) {
      return res.status(403).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "yourSecretKey", {
      expiresIn: "3h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};
const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const {account,personal}=req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if(account){
      req.body.account=JSON.parse(account);
    }
    if(personal){
      req.body.personal=JSON.parse(personal);
    }
    
    if (req.files) {
      req.body.personal.profile = "/profile/pic/" + req?.files?.profile[0]?.originalname;
    }
    const updatedData = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("User update successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const sendOtp = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "User not found, please create a new account" });
      return;
    }

    const otp = OtpGenerator();
    const hashedOtp = await bcrypt.hash(otp, 10);
    const expirationTime = Date.now() + 1 * 60 * 1000; 

    await sendEmail(
      message(otp), 
      req.body.email, 
      "One Time Password from Book Service"
    );

    user.forget = {
      otp: hashedOtp,
      otpExpiration: expirationTime,
      otpVerify: false,
    };

    await user.save();
    res.status(200).json("OTP has been sent to your email ID");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const verifyOTP=async(req,res)=>{
  try {
    const user=await User.findOne({email:req.body.email});
    if(!user){
      res.status(404).json({message:"Wrong OTP, Please enter correct OTP"});
      return;
    }
    const { otpExpiration,otp } = user.forget;
    
    if (Date.now() > otpExpiration) {
      res.status(400).json({ message: "OTP has expired" });
      return;
    }
    const isOtpValid = await bcrypt.compare(req.body.otp.toString(), otp);
    if (!isOtpValid) {
      res.status(400).json({ message: "Invalid OTP" });
      return;
    }
    user.forget.otpVerify=true;
    await user.save();
      res.status(200).json("OTP Verified successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
const setPassword=async(req,res)=>{
  try {
    const {newPassword,cnfPassword}=req.body;
    console.log(newPassword,cnfPassword)
    if(newPassword!==cnfPassword){
      res.status(403).json({message:"password not matched"});
      return;
    }
    const user=await User.findOne({email:req.body.email,'forget.otpVerify':true});
    if(!user||!user.forget.otp){
      res.status(404).json({message:"OTP expired, Please resend OTP"});
      return;
    }
    if(user.forget.otp){
      user.password=req.body.newPassword;
    }
 const savedpassword=   await user.save();
 if(!savedpassword){
  return res.status(400).json({message:"please try again"});
 }
    user.forget={
      otp:"",
      otpExpiration:new Date(),
      otpVerify:false
    }
    await user.save();
      res.status(200).json("Password reset successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}


const getAllUserByRoles=async(req,res)=>{
  try {
    const users=await User.find({'account.role':req.params.role});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const deleteUser=async(req,res)=>{
  try {
    const users=await User.findByIdAndDelete(req.params.id);
    if(!users){
      return res.status(404).json({message:"user id invalid"});
    }
    res.status(200).json("user delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}



module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUserDetails,
  logout,
  sendOtp,
  verifyOTP,
  setPassword,
  getAllUserByRoles,
  deleteUser,
};
