export const successResponse = (
  res,
  status = 200,
  message = "Success",
  data = null
) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res,
  status = 500,
  message = "Something went wrong"
) => {
  return res.status(status).json({
    success: false,
    message,
    data: null,
  });
};
