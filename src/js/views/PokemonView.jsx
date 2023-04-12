import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PokemonView = () => {
    const params = useParams();
    const [currentPokemon, setCurrentPokemon] = useState({});
    const { id } = params;

    const getPokemonDetail = async (id) => {
        try {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            if (response.ok) {
                const data = await response.json()
                setCurrentPokemon(data);
            }

        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        getPokemonDetail(id);
    }, []);
    return (
       
      
        <>
            {currentPokemon ? (
                <div className="card mb-3 m-3 bg-dark " style={{ MaxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={currentPokemon?.sprites?.front_default} className="img-fluid rounded-start image" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {currentPokemon?.name}</h5>
                                <p className="card-text text-white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>






                            </div>


                        </div>
                    </div>

                    <div className="h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4">

                    </div>
                    <div className="text d-flex mt-2 gap-5 text-danger m-3 justify-content-center text-white">
                        <p>Name: {currentPokemon?.name}</p>
                              <p>Base Experience: {currentPokemon?.base_experience} </p>
        <p>Stats: {currentPokemon?.stats?.[0]?.base_stat}</p>
        <p>Height: {currentPokemon?.height}</p>
        <p>Types: {currentPokemon?.types?.[0]?.slot}</p>
        <p>Identy: {currentPokemon?.id}</p> 
                    </div>
                </div>
            ) : (
                <>cargando</>


            )}
        </>






    );
};
export default PokemonView;
