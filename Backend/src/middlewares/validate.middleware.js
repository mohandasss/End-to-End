export const validate = (schema) => (req, res, next) => {
  console.log("Validating request body:", req.body);
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
