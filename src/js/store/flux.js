const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
					fetch('http https://swapi.dev/api/people')
					.then((people) => {
						return people.json()
					}).then((people) => {
						setStore.Characters(people.results)
					})

					fetch('http https://swapi.dev/api/planets')
					.then((planets) => {
						return planets.json()
					}).then((planets) => {
						setStore.Planets(planets.results)
					})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
