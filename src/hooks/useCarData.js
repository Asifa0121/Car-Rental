// useCarData.js
// import { useState, useEffect } from 'react';
// import { fetchCarData } from './carService';  

// export const useCarData = () => {
//   const [carData, setCarData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadCarData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCarData();
//         setCarData(data);
//       } catch (error) {
//         setError("Failed to load car data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCarData();
//   }, []);

//   return { carData, loading, error };
// };

import { useState, useEffect } from 'react';
import { fetchCarData } from './carService';  // Ensure carService.js is in the correct path

export const useCarData = () => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCarData = async () => {
      try {
        setLoading(true);
        const data = await fetchCarData();
        setCarData(data);
      } catch (error) {
        console.error("Failed to load car data", error);
      } finally {
        setLoading(false);
      }
    };

    loadCarData();
  }, []);

  return { carData, loading };
};

