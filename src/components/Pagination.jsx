import { MdCatchingPokemon } from "react-icons/md";

export default function Pagination({ prev, next, page, setSearchOption, setIsAvailable }) {
  return (
    <div className="pagination w-full rounded-full flex justify-around items-center my-2 mb-4">
      {page !== 0 ? (
        <div
          onClick={() => {
            prev();
            setSearchOption(false);
            setIsAvailable(true);
          }}
          className="prev flex items-center gap-2 bg-zinc-900  pl-1 pr-2 py-0.5 rounded-full"
        >
          <MdCatchingPokemon className="text-3xl" style={{ fill: "white" }} />
          <span className="uppercase text-xl font-bold text-white stroke-2 stroke-blue-700 ">
            prev
          </span>
        </div>
      ) : null}

      <div
        onClick={() => {
            next();
            setSearchOption(false);
            setIsAvailable(true);
          }}
        className="next flex items-center gap-2 bg-zinc-900  pl-1 pr-2 py-0.5 rounded-full"
      >
        <MdCatchingPokemon className="text-3xl" style={{ fill: "white" }} />
        <span className="uppercase text-xl font-bold text-white stroke-2 stroke-blue-700 ">
          next
        </span>
      </div>
    </div>
  );
}
