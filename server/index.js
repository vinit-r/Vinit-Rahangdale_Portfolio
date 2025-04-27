const express = require("express");
const DBconnect = require("./utils/dbConnect");
const app = express();
var cors = require("cors");

const {
  WhatsAppConnectRoute,
  UserRoute,
  ProjectRoute,
  ExperienceRoute,
  EducationRoute,
  TechnologyRoute,
  VisitorRoute
} = require("./web/router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/contact-us", WhatsAppConnectRoute);
app.use("/api/count", VisitorRoute);
app.use("/api/user", UserRoute);
app.use("/api/project", ProjectRoute);
app.use("/api/experience", ExperienceRoute);
app.use("/api/education", EducationRoute);
app.use("/api/technology", TechnologyRoute);

const port = 2112;
DBconnect();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
