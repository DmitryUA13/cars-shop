export async function fetchCars(
  limit: string | null = null,
  model: string | "all" = "all"
) {
  !limit ? "" : (limit = `&limit=${limit}`);
  console.log(limit);
  const headers = {
    "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}${limit}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
