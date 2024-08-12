import { LiaWeightHangingSolid, LiaRulerVerticalSolid } from "react-icons/lia";
import { MdCatchingPokemon } from "react-icons/md";
import PokemonMoveList from "./PokemonMoveList.jsx";
import { useState, useEffect } from "react";
import { colorsMap } from "./card-colors.js";

export default function CardItem({ data, page }) {
  const [info, setInfo] = useState([]);

  const [movesList, setMovesList] = useState(false);
  const handleMoveList = () => {
    setMovesList(prev => !prev);
  };

  const pokeInfo = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;

    let request = await fetch(url);
    let response = await request.json();
    let final = response.flavor_text_entries[10].flavor_text;
    setInfo(final);
  };
  
  

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    pokeInfo();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className=" pokemon-card max-w-[380px] h-full bg-white p-1 rounded-lg shadow-md relative z-10 relative">
      {/* POKEMON MOVES LIST COMPONENT */}
      <PokemonMoveList
        data={data}
        movesList={movesList}
        setMovesList={setMovesList}
        
      />

      <div
        className={`pokemon-info bg-${data.types[0].type.name} h-[100%] rounded-lg p-1`}
      >
        <div className="pokemon--name  flex justify-between items-center text-white p-4">
          <span className="text-3xl font-bold">{data.name}</span>
          <span className="text-md font-bold ">{`#${data.id
            .toString()
            .padStart(3, "0")}`}</span>
        </div>
        <div className="pokemon--image w-[180px] h-[180px]  mx-auto absolute left-1/2 translate-x-[-50%] top-[8%] z-10">
          <img
            className="object-cover object-center"
            src={`
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png
            `}
            alt="pokemon image"
          />
        </div>
        <div className="pokemon-ball-logo w-[180px] h-[180px] absolute top-1.5 right-1.5 opacity-20 ">
          <img
            className="w-[100%] h-[100%] object-cover object-center"
            src="https://www.pngitem.com/pimgs/b/20-202138_pokeball-symbol-png.png"
          />
        </div>
        <div className="pokemon--stats h-[69%] bg-white rounded-lg mt-28">
          <div className="pokemon--type flex items-center gap-2 justify-center pt-8">
            {data.types.map((types, idx) => (
              <span
                key={idx}
                className={`bg-${types.type.name} text-[#f1fceb] text-sm font-bold px-3 py-0.5 rounded-full`}
              >
                {types.type.name}
              </span>
            ))}
          </div>

          <div className="about-section">
            <h2
              className={`text-${data.types[0].type.name} text-lg font-bold mt-2 text-center`}
            >
              About
            </h2>
            <div className="pokemon--about grid grid-cols-3 mt-2">
              <div className="pokemon__weight text-slate-600 font-bold  px-4 py-2 flex flex-col justify-between items-center border-r-2 border-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-[1.25rem]">
                    <LiaWeightHangingSolid style={{ strokeWidth: "1" }} />
                  </span>
                  <span className="text-sm">{`${parseFloat(
                    data.weight * 0.1
                  ).toFixed(1)}kg `}</span>
                </div>
                <p className="text-slate-400 font-bold text-xs text-center">
                  Weight
                </p>
              </div>

              <div className="pokemon__height text-slate-600 font-bold  px-4 py-2 flex flex-col justify-between items-center border-r-2 border-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl">
                    <LiaRulerVerticalSolid style={{ strokeWidth: "1" }} />
                  </span>
                  <span className="text-sm">{`${parseFloat(
                    data.height * 0.1
                  ).toFixed(1)}m`}</span>
                </div>
                <p className="text-slate-400 font-bold text-xs text-center">
                  Height
                </p>
              </div>

              <div className="pokemon__moves text-slate-600 font-bold  px-4 py-2 flex flex-col justify-center items-center gap-y-3">
                <span className="show-list text-xs flex flex-col justify-center gap-[2px] ">
                  <span
                    onClick={handleMoveList}
                    className={` relative uppercase text-${data.types[0].type.name} 
                    `}
                  >
                    show list
                  </span>
                  <span
                    className={`show-list-underline w-full h-[2px] bg-${data.types[0].type.name}_light`}
                  ></span>
                </span>

                <p className="text-slate-400 font-bold text-xs text-center">
                  Moves
                </p>
              </div>
            </div>

            <div className="pokemon-description mx-3  mt-4">
              <p className=" text-xs h-[40%] leading-4 font-bold text-slate-500">
                {info}
              </p>
            </div>
            <div className="base--stats">
              <h2
                className={`text-${data.types[0].type.name} text-lg font-bold mt-2 text-center`}
              >
                Base Stats
              </h2>

              <div className="pokemon__base__stats text-sm font-bold flex justify-between items-evenly gap-3 mt-3 pb-4">
                <div
                  className={`stats__title text-right flex flex-col text-${data.types[0].type.name} border-r-2 border-slate-300 px-2`}
                >
                  <span>HP</span>
                  <span>ATK</span>
                  <span>DEF</span>
                  <span>SATK</span>
                  <span>SDEF</span>
                  <span>SPD</span>
                </div>

                <div className="stats__value flex flex-col justify-between text-slate-500">
                  {data.stats.map((stat, idx) => (
                    <span key={idx}>{stat.base_stat}</span>
                  ))}
                </div>
                <div className="stats__graph flex flex-col justify-around w-[100%] pr-2 ">
                  {data.stats.map((stat, idx) => (
                    <span
                      key={idx}
                      className={`w-full h-[0.4rem] rounded-full bg-${data.types[0].type.name}_light
                      } relative overflow-hidden`}
                    >
                      <span
                        style={{
                          transform: `translateX(-${100 - stat.base_stat}%)`
                        }}
                        className={`absolute w-[100%] h-[0.4rem] bg-${data.types[0].type.name}
                        } transition duration-800 ease-in`}
                      ></span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
