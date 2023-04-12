import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pokemonLogo from "../../img/pokemon.png"
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (

<nav className="navbar navbar-light bg-light mb-3">
<Link to="/">
	<img className="logo mx-5" src={pokemonLogo} />
</Link>
<div className="mx-5">
	<div className="dropdown">
		<a className="btn btn-dark dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			Favorite
			<span className="p-3">{store.favorites.length}</span>
		</a>

		<ul className="dropdown-menu">

			{ store.favorites.length !== 0 ? store.favorites.map((favorite) => 
			
			(<li key={favorite.id} className="text-center"> <span>{favorite.name} </span><button
			className="btn btn-light w-100"
			onClick={()=> actions.updateFavorites(favorite)} 
			><i className="fas fa-trash"></i></button></li>)): <li className="text-center p-0">(Empty)</li>}


		</ul>
	</div>
</div>
</nav>
);
};
