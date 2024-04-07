const Pokemon = (props) => {
    return (
        <div class="card">
        <div class="pokemon-name">{props.name}</div>
        <img class="pokemon-image" src= {props.image}/>
        <p>Type: {props.type}</p>
        <p>EXP: {props.exp}</p>
      </div>
    );
};

export default Pokemon;
