import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is a TypeScript Express server.");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
