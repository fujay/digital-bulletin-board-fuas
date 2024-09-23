import { convertKelvinToCelsios } from "@/utils/convertKelvinToCelsius";
import { MdOutlineLocationOn } from "react-icons/md";

export default async function Weather() {
  type WeatherData = {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level?: number;
      grnd_level?: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };

  const latitude = "50.11552";
  const longitude = "8.68417";
  const city = "Frankfurt am Main";

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}`
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return (
    <div>
      <p>{weather.weather[0].main}</p>
      <p>
        <span>{convertKelvinToCelsios(weather.main.temp)} &deg;C</span>
      </p>
      <p className="space-x-1 whitespace-nowrap">
        <span>Feels like</span>
        <span>{convertKelvinToCelsios(weather.main.feels_like)} &deg;C</span>
      </p>
      <p className="space-x-2 ">
        <span>
          {convertKelvinToCelsios(weather.main.temp_min)} &deg;C &darr;
        </span>
        <span>
          {convertKelvinToCelsios(weather.main.temp_max)} &deg;C &uarr;
        </span>
      </p>

      <p>
        <MdOutlineLocationOn />
        {weather.name}
      </p>
    </div>
  );
}
