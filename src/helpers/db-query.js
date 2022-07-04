module.exports = {
  createUser:
    "INSERT INTO users(full_name, email, password) VALUES ($1, $2, $3);",
  updateUser:
    "UPDATE users SET full_name=$1, email=$2, password=$3 WHERE id=$4;",
  deleteUser: "DELETE FROM users WHERE id=$1;",
  fetchUser: "SELECT * FROM users WHERE id=$1;",
  fetchUserByEmail: "SELECT * from users WHERE email=$1;",
};
