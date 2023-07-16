import { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';

const CitiesContext = createContext();

const BASE_URL = 'http://localhost:9000';

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async function () {
      try {
        setIsLoading(true);
        const resp = await fetch(`${BASE_URL}/cities`);
        const data = await resp.json();
        // console.log(data);
        setCities(data);
      } catch (err) {
        console.log('some error.......');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const resp = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await resp.json();
      // console.log(data);
      setCurrentCity(data);
    } catch (err) {
      console.log('some error.......');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    new Error('CitiesContext was used outside CitiesProvider.');
  return context;
}

export { CitiesProvider, useCities };
