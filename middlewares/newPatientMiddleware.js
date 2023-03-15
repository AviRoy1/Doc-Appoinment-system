export const createPatientMiddleware = async (req, res, next) => {
  try {
    console.log(req.body.name);
    if (
      !req.body.name ||
      !req.body.phoneNo ||
      !req.body.address ||
      !req.body.gender
    ) {
      returnres.status(400).json({
        success: false,
        message: "please enter all fields",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
    });
  }
};
