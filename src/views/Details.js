import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Target from '../components/target';



const Profile = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
                const types = data.types.map(type => type.type.name);
                const stats = data.stats.map(stat => {
                    return { name: stat.stat.name, value: stat.base_stat };
                });
                setPokemon({ ...data, types, stats });
            })
            .catch(error => console.error(error));
    }, [id]);

    if (!pokemon) {
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>;
    }
    const formatId = (id) => {

        return id.toString().padStart(3, "0");
    };
    const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <Target
            img={pokemon.sprites.front_default}
            name={capitalizeName(pokemon.name)}
            height={pokemon.height}
            weight={pokemon.weight}
            id={formatId(pokemon.id)}
            types={pokemon.types.join(", ")}
            abilities={pokemon.abilities.map((ability) => capitalizeName(ability.ability.name))}
            stats={pokemon.stats}
        />
    );
};

export default Profile;