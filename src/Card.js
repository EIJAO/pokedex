export default function Card(props) {


    let lista = function (item) {
        return <li class="list-group-item">{item.ability.name}</li>

    }

    let nome = props.bichinho.name;
    let habilidade = props.bichinho.abilities.map(lista);

    return (
        <div class="col-5 offset-4" >
            <div class="card" >
                <img src={props.bichinho.sprites.front_default} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 class="card-title"> {nome.toUpperCase()} </h3>

                    <p class="card-text">Peso: {props.bichinho.weight}</p>
                    <p class="card-text">Altura: {props.bichinho.height}</p>

                </div>


                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h5>Habilidades</h5></li>

                    {habilidade}
                </ul>
            </div>
        </div>
    )
}   