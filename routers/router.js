const express = require("express");
const passport = require("passport");
const register = require("../controllers/userControllers");

const router = express.Router();
//doctor register router
router.post("/doctors/register",register.registerDoctor);
//login router
router.post("/login",register.login);
//patient router
router.post(
  "/patients/register",
  passport.authenticate("jwt", { session: false }),
 register.registerPatient
);
//creating report router
router.post(
  "/patients/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  register.createReport
);
// view report router
router.get("/patients/:id/all_report", register.all_reports);
//reports status router
router.get("/reports/:status",register.AllReports);

module.exports = router;