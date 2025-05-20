/* eslint-disable no-unused-vars */
export function errorHandlerMiddleware(err, req, res, next) {
    console.error(err);
  
    res.send({
      message: err.message,
    });
  }