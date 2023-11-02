'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  const [pokemon, setPokemon] = useState(null);

  const update = () => {
    const randomNumber = Math.floor(Math.random() * 1017);
    setNumber(randomNumber)
  }

  useEffect(() => {
    if (!number) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((poke) => setPokemon(poke));
  }, [number]);

  const img = pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div>
          <h1>POKERANDOM</h1>          
          {pokemon && <h2>{pokemon.name}</h2>}
          {pokemon && <img src={img} width="400" />}
        </div>
      </div>
      <button className="p-2" onClick={update}>Cambiar</button>
    </main>
  );
}
