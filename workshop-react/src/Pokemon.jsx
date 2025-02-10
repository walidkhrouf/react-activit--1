import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [pokid, setPokid] = useState(132); // Default to Ditto's ID
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokid}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [pokid]); // Dependency array to re-fetch when `pokid` changes

    return (
        <>
            <input
                type='number'
                onChange={(e) => setPokid(e.target.value)}
                value={pokid} // To keep the input controlled
            />
            {pokemon ? (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default Pokemon;