const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
			},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				fetch('http https://swapi.dev/api/people',{
					method: "GET",
					headers: {"Content-Type":"application/json"}
				})
					.then((response) => response.json())
					.then((response) => setStore({characters:response.results}))
					.catch((err)=>console.error(err))
			},
			loadPlanets: () => {
				fetch('http https://swapi.dev/api/planets', {
					method: "GET",
					headers: {"Content-Type":"application/json"}
				})
				.then((response) => response.json())
				.then((response) => setStore({planets:response.results}))
				.catch((err)=>console.error(err))
			},
			addFavourites: (nombre) => {
				const store = getStore()
				setStore({favorites:[...store.favorites, nombre]})
			},
			deleteFavourites: (nombre) => {
				const store = getStore()
				store.favorites=store.favorites.filter((obj)=>nombre != obj)
			},

		}
	};
};

export default getState;
