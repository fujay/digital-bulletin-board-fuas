/**
 * Converts the weather description from OpenWeather to AnimateWeather format.
 *
 * @param weather - The weather description from OpenWeather.
 * @returns The weather description in AnimateWeather format.
 */
export function convertOpenWeatherToAnimateWeather(weather: string): string {
  switch (weather) {
    case "Thunderstorm":
      return "lightning";
    case "Drizzle":
      return "rainy";
    case "Rain":
      return "rainy";
    case "Snow":
      return "";
    case "Atmosphere":
      return "";
    case "Clear":
      return "sunny";
    case "Clouds":
      return "cloudy";
  }
}
