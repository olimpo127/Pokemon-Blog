import '../App.css';

const Target = (props) => {
    const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <div
            style={{ borderRadius: '5px' }}
            className="container border border-dark bg-danger mt-2 mb-2 shadow-lg ">
            <div
                style={{ borderRadius: '5px' }}
                className="row m-2 bg-light shadow-lg">
                <div className="imgContainer col-6 d-flex justify-content-center" >
                    <img
                        src={props.img}
                        alt={props.name}
                        style={{ height: '100%' }} />
                </div>
                <div className="col-6 bg-danger">
                    <div className=" m-2">
                        <div>
                            <h1 className="text-center text-white">{props.name}</h1>
                            <h4 className="text-center text-white">#{props.id}</h4>
                            <h4 className="text-center text-capitalize text-white">Type: {props.types}</h4>
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="text-center text-white">Features</h3>
                            <div className="feature-section text-center">
                                <ul className="m-2">
                                    <li className="list-group-item text-white">Height: {props.height} ft.</li>
                                    <li className="list-group-item text-white">Weight: {props.weight} lbs.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-center text-white">Abilities</h3>
                                <div className="ability-section text-center">
                                    <ul className="m-2">
                                        {props.abilities.map((ability, index) => (
                                            <li className="list-group-item text-white" key={index}>{ability}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-center text-white">Stats</h3>
                                <div className="stats-section text-center">
                                    <ul className="m-2">
                                        {props.stats.map((stat, index) => (
                                            <li className="text-capitalize text-white" key={index}>
                                                <span>{capitalizeName(stat.name)}: </span>
                                                <span>{stat.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target;
