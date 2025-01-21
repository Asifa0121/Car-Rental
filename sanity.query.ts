// Assuming GetCarData fetches data from Sanity or an API
export async function GetCarData() {
    const res = await fetch('https://your-api-endpoint.com/cars');
    const data = await res.json();
    return data;
  }
  