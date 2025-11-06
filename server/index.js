import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
    ],
  }),
);

app.use(express.json());

// API ROUTE

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello From Server" });
});

const PORT = 4000;

app.listen(PORT, () =>
  console.log("server is running on port http://localhost:" + PORT),
);
