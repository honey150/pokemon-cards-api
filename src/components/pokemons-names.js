function pokeNames() {

  let url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
 let names = fetch(url)
    .then(response => response.json())
    .then(data => data.results.map((list => list.name )) );
return names;
}

export default pokeNames;
