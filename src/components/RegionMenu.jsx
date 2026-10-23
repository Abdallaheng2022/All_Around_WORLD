import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

function RegionMenu({countriesList,setFilteredCountriesList}) {
  const OnChangeCountriesListHandler = (e)=>{
     const region = e.label
     const filteredCountries = 
     (region === "All regions") ? countriesList : countriesList.filter((country)=>{ return country.region === region})           
   
     setFilteredCountriesList(filteredCountries) 
  } 

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={OnChangeCountriesListHandler}
        classNames={{
    control: () => 'bg-white dark:!bg-black',
    menuList:()=> 'bg-white dark:bg-black',
    
  }}
      styles={{
      control: (base) => ({
      ...base,
      minWidth: 150,
      minHeight: 68,
      borderRadius: 9999,
    
    }),
    container: (base) => ({
      ...base,
      paddingRight:68,
      marginTop:25,
      
    
    }),
    menu: (base) => ({
      ...base,
      width:200,

      
    })
  }}
    />
  );
}

export default RegionMenu;
