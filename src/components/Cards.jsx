import CardItem from "../components/CardItem.jsx";
import { useEffect } from "react";
export default function Cards({ data, next, page, setSearchOption }) {
  useEffect(() => {
    let observer = new IntersectionObserver(
      param => {
        
        if (param[0].isIntersecting) {
          observer.unobserve(lastElement);
        if(data.length > 1) {
          next();
        }
          
        }
      },
      { threshold: 0.2 }
    );
    let lastElement = document.querySelector(".pokemon-card:last-child");
    if (!lastElement) return;
    observer.observe(lastElement);
  }, [page]);
  return (
    <div className="pokemon-cards grid grid-cols-1 gap-3 place-content-center md:gap-6 md:grid-cols-2 lg:grid-cols-4 pb-4">
      {data.map((item, idx) => (
        <CardItem key={idx} data={item} page={page} />
      ))}
    </div>
  );
}
