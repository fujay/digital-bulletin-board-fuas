/**
 * Converts temperature from Kelvin to Celsius and remove decimal part (keeps integer part).
 * @param tempKelvin The temperature in Kelvin.
 * @returns The temperature in Celsius.
 */
export function convertKelvinToCelsios(tempKelvin: number): number {
  const tempCelsius = tempKelvin - 273.15;
  return Math.floor(tempCelsius);
}
