import { useState, useEffect } from "react";

import Heading from "./components/Heading.jsx";
import SearchInput from "./components/SearchInput.jsx";
import Cards from "./components/Cards.jsx";
import Pagination from "./components/Pagination.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import SearchItemHint from "./components/SearchItemHint.jsx";
import pokeNames from "./components/pokemons-names.js";

function App() {
  // PAGE NO DECIDE FOR POKEMON OFFSET
  const [page, setPage] = useState(0);

  // POKEMON NAME IN SEARCH INPUT
  const [pokeName, setPokeName] = useState("");

  // LOGIC OF LOADING LOADER
  const [loading, setLoading] = useState(false);

  // OPTION TO SELECT BETWEEN SEARCH AND 20 POKEMONS PER PAGE
  const [searchOption, setSearchOption] = useState(false);

  // ALL POKEMON NAMES DATA STORE
  const [pokeNamesData, setPokeNamesData] = useState([]);

  // SEARCH INPUT STATE
  const [input, setInput] = useState("");

  // ALL POKEMON DATA STORE
  const [data, setData] = useState(() => {
    let pokeData = JSON.parse(localStorage.getItem("data"));
    if (pokeData) return pokeData;
    return [];
  });

  // Is POKEMON AVAILABLE
  const [isAvailable, setIsAvailable] = useState(true);

  // Pokemon movesList Logic

  // NAME OF ALL POKEMONS
  const handlePokeNames = async () => {
    const names = await pokeNames();
    setPokeNamesData(names);
  };

  // PREVIOUS BUTTON HANDLE
  const handlePrevBtn = () => {
    if (page === 0 || page < 0) {
      setPage(0);
    } else {
      setPage(prev => prev - 20);
    }
  };

  // NEXT BUTTON HANDLE
  const handleNextBtn = () => {
    setPage(prev => prev + 20);
  };

  // POKEMON SEARCH BY NAME
  const fetchPokemonByName = async () => {
    try {
      setData([]);

      data.length > 0 ? setLoading(false) : setLoading(true);

      let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
      let request = await fetch(url);
      if (!request.ok) {
        setLoading(false);
        setIsAvailable(false);
      }
      let response = await request.json();
      let result = [];
      result.push(response);
      setData(result);
      setLoading(false);
      setIsAvailable(true);
    } catch (err) {
      console.error(err);
    }
  };

  // 20 POKEMON PER PAGE API FETCH LOGIC
  const fetchPokemon = async () => {
    try {
      page === 0 ? setLoading(true) : setLoading(false);
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`;

      let response = await fetch(URL);
      let data = await response.json();
      let pokeData = data.results;

      let result = pokeData.map(async data => {
        let request = await fetch(data.url);
        let response = await request.json();

        return response;
      });
      let finalResult = await Promise.all(result);
      // Filter out any duplicates
      setData(prev => {
        const existingIds = prev.map(pokemon => pokemon.id);
        const newData = finalResult.filter(
          pokemon => !existingIds.includes(pokemon.id)
        );
        return [...prev, ...newData];
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // localStorage.setItem("data", JSON.stringify(data));

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    handlePokeNames();
    searchOption ? fetchPokemonByName() : fetchPokemon();

    return () => {
      controller.abort();
    };
  }, [page, pokeName]);
  return (
    <div className="main w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="container pt-2 relative">
        <Heading />

        <SearchInput
          setSearchOption={setSearchOption}
          setPokeName={setPokeName}
          input={input}
          setInput={setInput}
        />
        <SearchItemHint
          pokeNamesData={pokeNamesData}
          input={input}
          setPokeName={setPokeName}
          searchOption={searchOption}
          setSearchOption={setSearchOption}
          setInput={setInput}
        />
        {loading ? (
          <div className=" w-full min-h-full  text-center my-3 ">
            <div className="loading-content flex flex-col items-center justify-center">
              <img
                className="w-20 animate-spin"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png?20161023215848"
                alt="pokeball image"
              />
              <span className="text-4xl text-white uppercase font-bold animate-pulse">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          <>
            {/*<Pagination
              prev={handlePrevBtn}
              next={handleNextBtn}
              setSearchOption={setSearchOption}
              setIsAvailable={setIsAvailable}
              page={page}
            />
            */}
            {isAvailable ? (
              <Cards data={data} page={page} next={handleNextBtn} />
            ) : (
              <PageNotFound />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
