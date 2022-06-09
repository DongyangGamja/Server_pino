const jwt = require("jsonwebtoken"),
  secret = "gamja"

exports.check = (req, res, next) => {
  // read the token from header or url
  const token = req.headers.accesstoken

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })

  // if token is valid, it will respond with its info
  const respond = () => {
    next()
  }

  // if it has failed to verify, it will return an error message
  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message,
    })
  }

  // process the promise
  p.then(respond).catch(onError)
}
