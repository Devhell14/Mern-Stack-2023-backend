const express = require("express");
const router = express.Router();

// controllers
const {
    register,
    login,
    listUser,
    editUser,
    deleteUser,
    currentUser,
  } = require("../controllers/auth");
  
  // middleware
  const { auth, adminCheck } = require('../middleware/auth');
  
  // @Endpoint // #1 http://localhost:8000/api/register
  // @Method  POST
  // @Access  Public
  router.post("/register", register);
  
  // @Endpoint // #1 http://localhost:8000/api/login
  // @Method  POST
  // @Access  Public
  router.post("/login", login);

  // @Endpoint // #1 http://localhost:8000/api/current-user
  // @Method  POST
  // @Access  Private
  router.post("/current-user",auth, currentUser);

  // @Endpoint // #1 http://localhost:8000/api/current-user
  // @Method  POST
  // @Access  Private
  router.post("/current-admin",auth, adminCheck, currentUser);
  
  // @Endpoint // #1 http://localhost:8000/api/current
  // @Method  GET
  // @Access  Public
  router.get("/auth", listUser);
  
  // @Endpoint // #1 http://localhost:8000/api/auth
  // @Method  PUT
  // @Access  Public
  router.put("/auth", editUser);
  
  // @Endpoint // #1 http://localhost:8000/api/auth
  // @Method  DELETE
  // @Access  Public
  router.delete("/auth", deleteUser);



module.exports = router;
