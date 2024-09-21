"use server";

import { mongoDBConnect } from "@/lib/remoteDB-util";
import Weather, { IWeather } from "@/models/Weather";

export const saveWeather = async (weather: IWeather) => {
  await mongoDBConnect();
  const actualWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${weather.name}&appid=${process.env.OPENWEATHERMAP_API_KEY}`
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));
  const saveWeather = new Weather(actualWeather);
  return saveWeather.save();
};

export const getWeather = async () => {
  await mongoDBConnect();
  return Weather.find();
};
