import express from "express";
import {
  createPatientdata,
  deletePatientRecord,
  findPatientRecord,
  updatePatientRecord,
} from "../controllers/patientController.js";
import { createPatientMiddleware } from "../middlewares/newPatientMiddleware.js";

const router = express.Router();

//  1. POST: Create a new patient record
router.post("/newpatient", createPatientMiddleware, createPatientdata);

//  2. GET: Retrieve a patient's medical record
router.get("/getpatient/:id", findPatientRecord);

//  3. DELETE: Delete a patient's medical record
router.delete("/deletepatient/:id", deletePatientRecord);

//  4. PUT: Update a patient's medical record
router.put("/updatepatient/:id", updatePatientRecord);

export default router;
