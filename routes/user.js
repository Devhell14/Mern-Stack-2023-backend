const express = require("express");
const router = express.Router();

// controllers
const {
  listUsers,
  readUsers,
  updateUsers,
  removeUsers,
  changeStatus,
  changeRole
} = require("../controllers/users");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

// @Endpoint // #1 http://localhost:8000/api/users
// @Method  GET
// @Access  Private
router.get("/users", auth, adminCheck, listUsers);

// @Endpoint // #1 http://localhost:8000/api/users/:id
// @Method  GET 
// @Access  Private
router.get("/users/:id", readUsers);

// @Endpoint // #1 http://localhost:8000/api/users/:id
// @Method  PUT
// @Access  Private
router.put("/users/:id", auth, adminCheck, updateUsers);

// @Endpoint // #1 http://localhost:8000/api/users/:id
// @Method  DELETE
// @Access  Private
router.delete("/users/:id", removeUsers);

// @Endpoint // #1 http://localhost:8000/api/change-status
// @Method  POST
// @Access  Private
router.post("/change-status",auth, adminCheck, changeStatus);

// @Endpoint // #1 http://localhost:8000/api/change-role
// @Method  POST
// @Access  Private
router.post("/change-role",auth, adminCheck, changeRole);


module.exports = router;
