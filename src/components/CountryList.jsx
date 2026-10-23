import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";
/**
 *
 * اتعلمت حاجة أنك لو ثبت عرض الكارت لمقدار معين الgaps
 * للgrid
 * مش هتشتغل
 * تمام
 */
function CountryList({ data }) {
  console.log(data)  
  return (
    <div className="mt-10 mr-10 ml-10 grid grid-cols-4 gap-x-20 gap-y-5">
      {data && data.length ? data.map((country) => (
        <CountryCard key={country.alpha2Code}
                     flag={country.flags.svg}
                     countryName= {country.name}
                     population={country.population}
                     region = {country.region}
                     capital = {country.capital}/>
      )):<EmptySearch/>}
    </div>
  );
}

export default CountryList;
