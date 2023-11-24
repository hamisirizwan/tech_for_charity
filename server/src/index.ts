import express, { Request, Response } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import ROUTER from "./API/routes";

const app = express();
config(); // Load environment variables

const port = process.env.PORT; // You can provide a default value if PORT is not defined in .env

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("health check 100%");
});

app.use("/api/v1", ROUTER);

app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});

export {app}