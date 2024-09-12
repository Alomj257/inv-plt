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
const uploadMuiltiFieldFiles = require("../middlewares/uploadMultifieldFiles");

const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.put("/update/:id",uploadMuiltiFieldFiles("public/profile"),  updateUserDetails);
AuthRoutes.delete("/delete/:id", deleteUser);
AuthRoutes.get("/users/role/:role", getAllUserByRoles);
AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:id", getUserById);
AuthRoutes.get("/logout", logout);
AuthRoutes.post("/forget", sendOtp);
AuthRoutes.post("/otp-verification", verifyOTP);
AuthRoutes.post("/reset-password", setPassword);

module.exports = AuthRoutes;
