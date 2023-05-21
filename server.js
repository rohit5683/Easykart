import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./backend/config/database.js";
import authRoutes from "./backend/routes/authRoute.js";
import categoryRoute from "./backend/routes/categoryRoute.js";
import productRoutes from "./backend/routes/productRoutes.js";
import cors from "cors";

// configure env
dotenv.config();

//rest object
const app = express();

//database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Easymart",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode http://localhost:${PORT}`
      .bgBlack.green
  );
});
