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

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "All" || country.region === region || country.subregion === region;

    return matchesSearch && matchesRegion;
  });

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
