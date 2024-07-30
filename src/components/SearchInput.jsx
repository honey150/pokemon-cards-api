import { useState } from "react";

export default function SearchInput({
  setPokeName,
  setSearchOption,
  input,
  setInput,
  setMovesList
}) {
  const handleInputData = e => {
    setPokeName(input);
    setInput("");
    setSearchOption(true);
    setMovesList(prev => !prev);
  };

  return (
    <div className="pokemon-search mx-auto w-full flex flex-col items-center gap-3 p-2">
      <h1 className="text-lg text-white font-bold">Who is you looking for?</h1>
      <div class="search-input bg-white p-2 rounded-full flex justify-between">
        <input
          className="outline-none border-none pl-2 text-blue-600 font-bold"
          type="text"
          onChange={e => {
            setInput(String(e.target.value).toLowerCase());
          }}
          value={input}
          name="pokemon"
          id="pokemon"
          placeholder="E.g. Pikachu.."
        />
        <button
          onClick={handleInputData}
          className="bg-gradient-to-r from-[#eaec0f] via-[#b8e408] to-[#a8eb40] py-0.5 px-2 rounded-full text-white text-lg font-bolder"
        >
          Search
        </button>
      </div>
    </div>
  );
}
