// Define custom error handling middleware
 export function errorHandler(error, req, res, next) {
    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Duplicate entry', message: error.sqlMessage });
        // Other expected errors
    } 
    next(err)
}

export default errorHandler

