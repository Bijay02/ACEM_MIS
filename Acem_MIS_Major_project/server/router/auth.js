const express = require("express");
const router = express.Router();

require("../db/conn");
const model = require("../models/studentModel");

// router.post("/register", async (req, res) => {
//   const { name, email, password, location, batch, section, faculty } = req.body;
//   if (
//     !name ||
//     !email ||
//     !password ||
//     !location ||
//     !batch ||
//     !section ||
//     !faculty
//   ) {
//     return res.status(422).json({ error: "Plz fill the field property" });
//   }

//   model
//     .findOne({ email: email })
//     .then((userexist) => {
//       if (userexist) {
//         return res.status(422).json({ error: "Email Already Exist!!" });
//       }
//       const user = new model({
//         name,
//         email,
//         password,
//         location,
//         batch,
//         section,
//         faculty,
//       });
//       user
//         .save()
//         .then(() => {
//           res.status(200).json({ message: "User Registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Faled to register" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/Login", async (req, res) => {
  if (req.body.cid && req.body.email) {
    const userLogin = await model.findOne(req.body);
    if (userLogin) {
      // const token = userLogin.generateAuthToken();

      return res.status(201).json(userLogin);
    } else {
      res.send({ result: "NO USER FOUND" });
    }
  } else {
    res.send({ result: "NO USER FOUND" });
  }
});

module.exports = router;
