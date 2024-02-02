// Define custom error handling middleware
 export function errorHandler(err, req, res, next) {
    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Duplicate entry', message: err.sqlMessage });
    } 

    next(err)
}

export default errorHandler

