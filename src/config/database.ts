require("dotenv").config();
import { Sequelize } from "sequelize-typescript";
import { User } from "../model/User";

export const sequelize = new Sequelize({
  database: `${process.env.DB_NAME}`,
  dialect: "postgres",
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  host: `${process.env.DB_HOST}`,
  port: 5432,
  models: [User], // Add models here
});
