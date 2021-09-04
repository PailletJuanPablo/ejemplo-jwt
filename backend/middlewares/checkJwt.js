const jwt = require('jsonwebtoken');
const claveSecreta = '123456';

module.exports = (req, res, next) => {

    // 1) Verificar si hay un token en la petición

    const authorizationHeader = req.headers['authorization'];
    if(!authorizationHeader) {
        return res.json({error: true}, 401)
    }

    try {
        const decodedToken = jwt.verify(authorizationHeader, claveSecreta);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.json({error: true}, 401);
    }


}