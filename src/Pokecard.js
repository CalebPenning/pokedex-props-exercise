const Pokecard = ({ id, name, type, base_experience }) => {
    return (
        <div className="card">
            <h5>{name}</h5>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <br />
            <span>Type: {type}</span>
            <br />
            <span>EXP: {base_experience}</span>
        </div>
    )
}

export default Pokecard