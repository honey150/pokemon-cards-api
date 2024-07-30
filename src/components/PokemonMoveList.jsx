import { MdCatchingPokemon } from "react-icons/md";
import { useState } from "react";
import { colorsMap } from "./card-colors.js";

export default function PokemonMoveList({
  data,
  movesList,
  setMovesList,
}) {
  return (
    <div
      className={`${
        movesList ? "block" : "hidden"
      } moves--list w-full h-full bg-white p-1 rounded-lg shadow-md absolute z-20 inset-0 m-auto `}
    >
      <div
        className={`pokemon-info bg-${data.types[0].type.name} h-full   rounded-lg p-1 `}
      >
        <div className="pokemon--name flex justify-between items-center text-white p-4">
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
        <div class="pokemon--stats bg-white rounded-lg mt-28 h-[69%] relative">
          <div
            onClick={() => setMovesList(prev => !prev)}
            class="close flex items-center gap-2 bg-zinc-900  pl-1 pr-2 py-0.5 rounded-full absolute top-20 right-5"
          >
            <MdCatchingPokemon className="text-xl" style={{ fill: "white" }} />
            <span className="uppercase text-sm font-bold text-white stroke-2 stroke-blue-700 ">
              close
            </span>
          </div>

          <div class="pokemon--type flex items-center gap-2 justify-center pt-10">
            {data.types.map((types, idx) => (
              <span
                key={idx}
                className={`bg-${types.type.name} text-[#f1fceb] text-sm font-bold px-3 py-0.5 rounded-full`}
              >
                {types.type.name}
              </span>
            ))}
          </div>

          <div class="about-section ">
            <h2
              className={`text-${data.types[0].type.name} text-lg font-bold mt-2 text-center`}
            >
              Moves List
            </h2>
            <div
              class={`move-list-table mx-3  mt-4  overflow-y-auto  rounded-md p-2
               w-[90%] border-2 border-zinc-900 absolute left-1.5 h-[67%] `}
            >
              {data.moves.map((list, idx) => (
                <div
                  key={idx}
                  className={`w-[100%] border-s-2 border-e-2 border-t-[1px] border-b-[1px] border-black  flex justify-between items-center ${
                    colorsMap[data.types[0].type.name][2]
                  }`}
                >
                  <span className="flex-1 text-center border-e-2 border-black">
                    {idx + 1}
                  </span>

                  <span className="flex-1 text-center">{list.move.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
