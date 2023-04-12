const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			pokemones: [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},


		actions: {
			functionDemo: () => console.log("me ejecuto en el flux"),
			fetchPokemon: async () => {
				try {
					const store = getStore();
				/* 	const localPokemones = JSON.parse(
						localStorage.getItem("pokemones")
					);
					if (localPokemones) {
						setStore({ ...store, pokemones: localPokemones });
						return;
					} */
					const pokeApi=[]
					for (let index = 60; index <= 75; index++) {
						
						const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
						if (response.ok) {
							const data = await response.json();
							
							pokeApi.push(data)
							
						
						}
					}
					setStore({ ...store, pokemones:  pokeApi });
					localStorage.setItem(
						"pokemones",
						JSON.stringify(pokeApi)
					);
				} catch (error) {
					console.log(error);
				}
			},



			updateFavorites: (item) => {
				const store = getStore();
				const favorite = store.favorites.some((fav) => fav.id === item.id)
				if (favorite) {
					const newFavorite = store.favorites.filter((fav) => fav.id !== item.id)
					setStore({ ...store, favorites: newFavorite })
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				} else {
					setStore({ ...store, favorites: [...store.favorites, item] });
					localStorage.setItem("favorites", JSON.stringify(store.favorites))

				}
				console.log(store.favorites)
			}


		},

	};
};

export default getState;
