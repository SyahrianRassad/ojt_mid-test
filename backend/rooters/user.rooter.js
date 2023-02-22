const router = require("express").Router();
const {
  getUser,
  postUser,
  login
} = require('../controllers/user.controller');

router.route("/").get(getUser).post(postUser);
router.route("/login").post(login)
// router.route("/:id").patch(putMahasiswa).delete(deleteMahasiswa)
module.exports = router;