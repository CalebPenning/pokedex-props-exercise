import Pokecard  from "./Pokecard"

const Pokedex = (props) => {
    return (
        <div className="pokedex">
            <h2>Pokedex</h2>
            <div className="cards">
                {props.pokemon.map(p => (
                    <Pokecard 
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
        </div>
    )
} 

export default Pokedex