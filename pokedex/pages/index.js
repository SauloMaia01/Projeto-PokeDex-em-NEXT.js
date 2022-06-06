import styles from "../styles/Home.module.css";

export async function getStaticProps() {

  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json

  // add pokemon index
  data.results.forEach ( (item, index) => {
    item.id = index +1 
  })

    return {
      prosps: {
        pokemons: data.results,
      }
    }

}

export default function Home() {
  return <h1>PokeNext</h1>    
};
