module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log the stack trace
    
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
  
    // Send the error details back as JSON
    res.status(status).json({
      status: 'error',
      statusCode: status,
      message
    });
  };
  