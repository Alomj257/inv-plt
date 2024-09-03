const {
  register,
  login,
  updateUserDetails,
  getAllUsers,
  getUserById,
  logout,
  sendOtp,
  verifyOTP,
  setPassword,
  getAllUserByRoles,
  deleteUser,
} = require("../controller/authController");

const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.put("/update/:id", updateUserDetails);
AuthRoutes.delete("/delete/:id", deleteUser);
AuthRoutes.get("/users/role/:role", getAllUserByRoles);
AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:id", getUserById);
AuthRoutes.get("/logout", logout);
AuthRoutes.post("/forget", sendOtp);
AuthRoutes.post("/otp-verification", verifyOTP);
AuthRoutes.post("/reset-password", setPassword);
AuthRoutes.get("/test",(req,res)=>{
  res.send("working fine")
})

module.exports = AuthRoutes;
