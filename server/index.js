import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/postes.js";

const app = express();
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// hadbeen:hadjer123

// const cors = require("cors");
app.use(cors());

app.use("/posts", postRoutes);
const CONNECTION_URL =
  "mongodb+srv://hadbeen:hadjer123@cluster0.wlr6l.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server running`)))
  .catch((error) => console.log(error.message));
// mongoose.set(`useFindAndModify`, false);
