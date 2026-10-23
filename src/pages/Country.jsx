import { useParams, Link } from "react-router";
import { useFetchData } from "../useFetchData";
import ShowMessage from "../components/ShowMessage";
function Country() {
  const { country } = useParams();
  const { Result, isError, isLoading } = useFetchData(country);

  return (
    <>
      {isError && <ShowMessage message="Something is wrong!" />}
      {isLoading && (
        <ShowMessage message="Countries information will be loaded..." />
      )}
      {!isLoading && !isError && (
        <main class="px-7 py-16">
          <Link
            to="/"
            className="flex h-12 w-13 items-center justify-center rounded-md bg-white dark:text-gray-950 text-2xl shadow-sm"
          >
            ←
          </Link>

          <div className="mt-28 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-48">
            <div className="flex w-full items-center justify-center">
              <span className="text-7xl font-semibold text-gray-400/70">
                <img src={Result?.flags?.svg}/>
              </span>
            </div>

            <div className="pt-0">
              <h2 className="mb-10 text-4xl font-extrabold">{country}</h2>

              <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                <div className="space-y-8 text-xl">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {Result?.population?.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{Result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span className="font-light">{Result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{Result?.capital}</span>
                  </p>
                </div>
                <div className="mt-8 space-y-8 text-xl sm:mt-0">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {Result?.topLevelDomain?.join(", ")}
                    </span>
                  </p>

                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {Result?.currencies &&
                        Object.keys(Result?.currencies)
                        .map(
                          (currency) => Result?.currencies[currency]?.name
                       ).join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {Result?.languages &&
                        Object.keys(Result?.languages)
                        .map(
                          (language) => Result?.languages[language]?.name
                       ).join(", ")}
                    </span>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Country;
