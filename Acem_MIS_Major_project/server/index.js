const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Student = require("./router/studentRoute");
const Feedback = require("./router/feedbackRoute");
const Event = require("./router/eventRoute");
const Admin = require("./router/adminRoute");
const BatchSection = require("./router/batchRoute");
const fileUpload = require("express-fileupload");
const Routine = require("./router/routineRoute");
const Faculty = require("./router/facultyRoute");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

dotenv.config({ path: "./config.env" });

require("./db/conn");

port = process.env.PORT || 8000;

app.use(require("./router/auth"));

app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api", Student);
app.use("/api", Feedback);
app.use("/api", BatchSection);
app.use("/api", Event);
app.use("/api", Admin);
app.use("/api", Routine);
app.use("/api", Faculty);

app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});
