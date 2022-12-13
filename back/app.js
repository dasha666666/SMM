const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./src/modules/routes/audit-routes");
const { PORT, URL, CLIENT_URL } = require("./config");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
);
app.use("/", routes);

const connect = () => {
  try {
    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Port is listen on ${PORT}`);
    });
  } catch (error) {
    console.error("Error connected");
    process.exit(1);
  }
};

connect();
