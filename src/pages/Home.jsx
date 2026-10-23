import SearchBar from "../components/SearchBar";
import RegionMenu from "../components/RegionMenu"
import CountryList from "../components/CountryList";

import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";
function Home(){
 const { Result,
    isLoading,
    isError,
    filteredCountriesList,
    setFilteredCountriesList}=useFetchData()       

return (
    <>
    {isError && <ShowMessage message="Something is wrong!"/>}
      {isLoading&&<ShowMessage message="Countries information will be loaded..."/>} 
   {!isLoading && !isError && (
     <>
      <div className="flex justify-center mt-13 items-center">
      <SearchBar countriesList={Result} setFilteredCountriesList={setFilteredCountriesList} />
      <RegionMenu countriesList={Result} setFilteredCountriesList={setFilteredCountriesList}/> 
      </div>
      <CountryList data={filteredCountriesList}/>
      </>
      
    )}
   </>
);
}

export default Home;