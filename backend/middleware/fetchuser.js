var jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config({path: `${__dirname}/../.env`});

const jwtSecret = process.env.JWT_SECRET;

const fetchuser=(req, res, next)=>{
    //Get user from the JWT token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token, jwtSecret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"});
    }

}


module.exports= fetchuser;

