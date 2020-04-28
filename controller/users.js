const User = require("../models/users");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
};

async function signup(req, res) {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
