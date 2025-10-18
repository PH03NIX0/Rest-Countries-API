import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
}

function App() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital"
);

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        // Only set countries if data is actually an array
        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.error("Unexpected API response:", data);
          setCountries([]);
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = Array.isArray(countries)
    ? countries.filter((country) => {
        const matchesSearch = country.name.common
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesRegion =
          region === "All" ||
          country.region === region ||
          country.subregion === region;

        return matchesSearch && matchesRegion;
      })
    : [];

  if (loading) {
    return <div className="p-8 text-center text-lg">Loading countries...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            dark={dark}
            toggleDarkMode={() => setDark(!dark)}
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
            filteredCountries={filteredCountries}
          />
        }
      />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  );
}

export default App;
