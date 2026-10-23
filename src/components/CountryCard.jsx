import { Link } from "react-router";

function CountryCard({ flag, countryName, population, region, capital }) {
  return (
    <Link
      to={`country/${countryName}`}
      className="rounded-sm bg-white px-5 py-5 shadow-gray-300 dark:bg-black"
    >
      <img
        src={flag}
        alt="countries details"
        aria-placeholder="Empty image until the app extract the data from the API"
        loading="lazy"
      />

      <div className="mt-5 flex flex-col gap-3">
        <h2 className="font-bold">{countryName}</h2>

        <p>
          <span className="font-semibold">Population: </span>
          <span>{population}</span>
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
