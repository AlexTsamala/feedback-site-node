function ErrorHandler(err, req, res, next) {
  // Handle the error
  console.error(err);

  // Optionally, you can send a custom error response to the client
  res.status(500).json({ error: err.stack });

  // Pass the error to the next error-handling middleware
  next(err);
}

export default ErrorHandler;
