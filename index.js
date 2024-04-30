import express from "express";
import { fetchWeather } from "./src/api/api.js";
import cors from "cors";

const app = express();
app.use(cors());

//Weather API KEY
const apiKey = "ba381918938a40e181d95032243004";

const PORT = 4000;

app.get("/fetch-weather/:city", fetchWeather);

app.listen(PORT, () => {
  console.log("server running on", PORT);
});
