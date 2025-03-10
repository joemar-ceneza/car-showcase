export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "e0604fc326msh7c09e34f04aef89p14955cjsn61390440bb3f",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
