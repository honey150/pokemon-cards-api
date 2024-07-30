import { useState, useEffect } from "react";

export default function SearchItemHint({
  pokeNamesData,
  setPokeName,
  searchOption,
  setSearchOption,
  input,
  setInput
}) {
  
const [hintNames, setHintNames] = useState([])
  useEffect(() => {
    setTimeout(() => {
      let value = pokeNamesData.filter(names => names.startsWith(input));
      if (input === "") {
        setHintNames([]);
      }
      setHintNames(value);
    }, 1000);
  }, [input]);

  const hanleHintName = data => {
    setPokeName(String(data).trim().toLowerCase());
    setSearchOption(true);

    setInput("");
  };

  console.log(searchOption);

  return (
    <div
      className={`${
        input === "" ? "hidden" : "block"
      } search-hint w-[70%] h-[20vh] rounded-lg z-20 bg-white absolute left-1/2 -translate-x-1/2 overflow-hidden border-2 border-zinc-700`}
    >
      <ul className="w-full h-full overflow-y-auto flex flex-col">
        {hintNames.map(list => (
          <li
            onClick={e => hanleHintName(e.target.innerText)}
            key={list}
            className="p-2 hover:bg-gray-100"
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
}
