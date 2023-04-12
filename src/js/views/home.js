import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	console.log(store.pokemones);

	return (
		<div className="text-center mt-5 container  ">
			<h2 className="text-dark text-left text-start">Pokemones</h2>

			<div className="carrusel">
				<div className="d-flex gap-5">


					{store.pokemones.map((pokemon) => {
						return (
							<div className="card" key={pokemon.id} style={{ minWidth: "18rem" }}>
								<img
									src={pokemon.sprites.front_default}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body text-dark">
									<h5 className="card-title"> {pokemon.name}</h5>
									<p className="card-text">
										Abilities {pokemon.base_experience}
									</p>
									<p className="card-text">
										Stats: {pokemon.stats[0].base_stat}
									</p>
									<p className="card-text">
									Height: {pokemon.height}
									</p>
									<div className="d-flex justify-content-between">
										<button
											className="btn btn-outline-danger"
											onClick={() => navigate(`/pokemon/${pokemon.id}`)}

										>
											Learn More!
										</button>
										<button className="btn btn-outline-danger"
											onClick={() => (actions.updateFavorites(pokemon))}>

											{
												store.favorites.some((fav) => fav.id === pokemon.id)
													? <i className="fas fa-heart btn-end"></i>
													: <i className="far fa-heart btn-end"></i>
											}


										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			
		</div>
	);
};
