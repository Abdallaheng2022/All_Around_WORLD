function SearchBar({countriesList,setFilteredCountriesList}){
const onHandleSearch = (e)=>{
    e.preventDefault()
    const searchTerm = e.target.elements.search.value;
    const filteredCountries = searchTerm==""|| !searchTerm ? countriesList : countriesList.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCountriesList(filteredCountries)
}

return(<form className="relative flex-1 px-15" onSubmit={onHandleSearch}>
   <div className="relative left-3 top-10">
    <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24" width="24" height="24"
     fill="none" stroke="#9aa3ad" stroke-width="2" stroke-linecap="round">
  <circle cx="10.5" cy="10.5" r="6.5"/>
  <line x1="15.5" y1="15.5" x2="21" y2="21"/>
</svg>
 </div>
    <input type="text"
           name="search"
           placeholder="Search..."
           className="rounded-full w-xl h-15 px-15 bg-white dark:bg-black"
           />
          
</form>)

}

export default SearchBar;