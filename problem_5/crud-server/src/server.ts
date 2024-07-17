import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import router from "./routes/resource-routes";
import { AppError } from "./utils/errors/errors";
import { HttpStatus } from "./utils/errors/error-status.enum";
import { ErrorCodes } from "./utils/errors/error-codes.enum";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use("/api/resources", router);

app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.$connect(); // Attempt to connect to the database
    console.log("Database connection successful");
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error("Database connection error:", error);
    next(error); // Pass error to Express error handler
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ code: err.code, message: err.message });
  } else {
    res.status(HttpStatus.Internal).json({ code: ErrorCodes.Internal, message: "Internal server error" });
  }
});
