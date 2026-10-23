import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [Result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filteredCountriesList, setFilteredCountriesList] = useState([]);

  useEffect(() => {
    if (country){
      fetchDataFromAPI();
    }else{
      fetchDataFromLocalStorage();  
          
    }
    


  }, []);
  const fetchDataFromAPI = () => {
    let url = "https://countries.dev/countries?limit=280";
    setIsLoading(true);
    if (country) {
      url = `https://countries.dev/name/${country}`;
    }
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setFilteredCountriesList(data);
          localStorage.setItem("countries",JSON.stringify(data))
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };


 const fetchDataFromLocalStorage = () => {
       const data=JSON.parse(localStorage.getItem("countries")) 
       if(data){
           setResult(data)
           setFilteredCountriesList(data);
       }else{
           fetchDataFromAPI();

       }             
 
 }
  return {
    Result,
    isLoading,
    isError,
    filteredCountriesList,
    setFilteredCountriesList,
  };
};
