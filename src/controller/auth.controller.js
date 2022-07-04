const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/database.js");
const queries = require("../helpers/db-query");

exports.signup = (req, res) => {
  db.query(queries.createUser, [
    req.body.full_name,
    req.body.email,
    bcrypt.hashSync(req.body.password, 12),
  ])
    .then((resp) => {
      return res.status(201).send({ message: "Sucessfully register" });
    })
    .catch((err) => {
    
      return res.status(400).send({ message: "User already exist", err });
    });
};
exports.signin = async (req, res) => {
 const {rows, rowCount} = await db.query(queries.fetchUserByEmail,[
    req.body.email,
  ])

  if(rowCount === 0) return res.status(400).send({message: "Login unsuccessful."})
  
  //comparing passwords
  const passwordIsValid = bcrypt.compareSync(req.body.password, rows[0].password);
  //chehcking if password was valid and send response
  if (!passwordIsValid) {
    return res
      .status(400)
      .send({ accessToken: null, message: "Login unsucessful" });
  }
  //login token with user id
  const token = jwt.sign(
    {
      id: rows[0].id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1 min",
    }
  );
  //responding to clinet request with user profile sucess message and access token
  res.status(200).send({
    message: "login successfull",
    accessToken: token,
  });
};
