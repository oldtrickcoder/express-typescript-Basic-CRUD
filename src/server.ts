require("dotenv").config();
import express from "express";
import { sequelize } from "./config/database";
import { userRouter } from "./routes/userRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Wokelah kalo begitu",
  });
});
app.use("/users", userRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// app.listen(PORT, () => {
//   console.log("server online at Port %s", PORT);
//   console.log({
//     database: `${process.env.DB_NAME}`,
//     dialect: "postgres",
//     username: `${process.env.DB_USER}`,
//     password: `${process.env.DB_PASS}`,
//     host: `${process.env.DB_HOST}`,
//     port: 5432,
//   });
// });
