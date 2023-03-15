import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phoneNo: {
    type: String,
    unique: true,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  medicine: {
    type: String,
    default: "none",
  },
  diagnosis: {
    type: String,
    default: "none",
  },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
