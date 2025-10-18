import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface CountryDetailType {
  name: { common: string; nativeName?: Record<string, { common: string }> };
  flags: { png: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}

export default function CountryDetail() {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<CountryDetailType | null>(null);

  useEffect(() => {
    if (!name) return;
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((err) => console.error(err));
  }, [name]);

  if (!country) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : country.name.common;

  const currencyList = country.currencies
    ? Object.values(country.currencies).map((c) => c.name).join(", ")
    : "N/A";

  const languageList = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-8 px-6 py-2 bg-white dark:bg-neutral-800 text-gray-800 dark:text-white shadow rounded hover:bg-gray-100 dark:hover:bg-neutral-700"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="w-full max-w-lg mx-auto rounded shadow"
          />

          <div>
            <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>
            <div className="space-y-2 text-sm">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub-Region:</strong> {country.subregion || "N/A"}</p>
              <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
              <p><strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}</p>
              <p><strong>Currencies:</strong> {currencyList}</p>
              <p><strong>Languages:</strong> {languageList}</p>
              <p><strong>Border Countries:</strong> {country.borders?.join(", ") || "None"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
