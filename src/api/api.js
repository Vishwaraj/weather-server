import axios from "axios";
import { url } from "../url.js";
import { transformWeatherData } from "../transform/helper.js";

export const fetchWeather = async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `${url}/current.json?key=ba381918938a40e181d95032243004&q=${city}`
    );

    let transformedData = transformWeatherData(response.data);
    return res.status(200).json({
      data: transformedData,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
