const jwt =require("jsonwebtoken")

const accessTokenSecret = 'jr9YqBEJhUVVXfSb';

const authenticateJWT = (req, res, next) => {
  console.log(req.headers)
    const authHeader = JSON.parse(req.headers["authorization"]);
    console.log(req.body)
    console.log('here',authHeader)
    const token = authHeader;
    if (token) {
        jwt.verify(token, accessTokenSecret, function(err, decoded) {
          if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
      }
}
module.exports={authenticateJWT}