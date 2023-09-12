export async function fetchCars(
  limit: string | null = null,
  model: string | null = null
) {
  !limit ? "" : (limit = `&limit=${limit}`);
  !model ? "" : (model = `model=${model}`);
  console.log(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${model}${limit}`
  );
  const headers = {
    "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${model}${limit}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRetn = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Dfse rental price per day in dollars
  const mileageFactor = 0.1; //Additional rate per mile driven
  const ageFactor = 0.05; //Additional rate per year of vechicle age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay;
};
