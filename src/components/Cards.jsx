import CardItem from "../components/CardItem.jsx";

export default function Cards({ data, page, setSearchOption }) {
  return (
    <div className="pokemon-cards grid grid-cols-1 gap-3 place-content-center md:gap-6 md:grid-cols-2 lg:grid-cols-4 pb-4">
      {data.map((item, idx) => (
        <CardItem
          key={idx}
          data={item}
          page={page}
          
        />
      ))}
    </div>
  );
}
