import Patient from "../models/patient.js";

export const createPatientdata = async (req, res) => {
  try {
    const { name, phoneNo, address, gender, medicine, diagnosis } = req.body;

    const newPatient = await Patient.create({
      name,
      phoneNo,
      address,
      gender,
      medicine,
      diagnosis,
    });

    return res.status(200).json({
      success: true,
      message: "New Patient Recorde has been created",
      data: newPatient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Servre error",
    });
  }
};

export const deletePatientRecord = async (req, res) => {
  try {
    const id = req.params.id;
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).josn({
        success: false,
        message: "Patient Not Found",
      });
    }
    await Patient.deleteOne({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the patient",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Servre error",
    });
  }
};

export const findPatientRecord = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).josn({
        success: false,
        message: "Patient Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      patient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Servre error",
    });
  }
};

export const updatePatientRecord = async (req, res) => {
  try {
    const update = req.body;
    const id = req.params.id;
    console.log(req.body);
    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({
        success: false,
      });
    }

    const response = await Patient.findByIdAndUpdate(
      id,
      {
        $set: update,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Servre error",
    });
  }
};
