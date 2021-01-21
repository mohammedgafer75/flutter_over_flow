const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./../config');

module.exports = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    const error = new Error();
    error.status = 403;
    if(authHeader){
        const token = authHeader;
        if(token){
            try {
                const user = jwt.verify(token, SECRET_KEY);
                req.user = user;
                return next();
            } catch (error) {
                error.message = 'invalid/expired token';
                return next(error);
            }
        }
        error.message = 'authorization token must be [token]';
        return next(error);
    }
    error.message = 'authrization hearder must be provided';
    return next(error);
};