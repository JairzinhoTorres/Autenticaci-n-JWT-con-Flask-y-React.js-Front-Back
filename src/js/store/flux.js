const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            personajes: [],
            vehiculos: [],
            planetas: [],
            favoritos: [],
        },
        actions: {
            // Use getActions to call a function within a fuction

            //   exampleFunction: () => {
            //     getActions().changeColor(0, "green");
            // Este es el fetch de personajes
            //   },
            obtenerInfoPersonajes: () => {
                fetch("https://swapi.dev/api/people/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Este es el fetch de vehiculos
            obtenerInfoVehiculos: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehiculos: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Este es el fetch de los planetas
            obtenerInfoPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            loadSomeData: () => {
                /**
                        	fetch().then().then(data => setStore({ "foo": data.bar }))
                        */
            },

            login: (userEmail, userPassword) => {
                fetch('https://3000-jairzinhoto-autenticaci-6zwok39ml0j.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "correo": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },




            agregarFavorito: (favorito) => {
                console.log("funciona");
                let store = getStore(); //aca declaro una variable store y guardo la llamada del objeto store del flux
                if (favorito !== "" && !store.favoritos.includes(favorito))
                    setStore({
                        favoritos: [...store.favoritos, favorito]
                    }); // aca seteamos, con set store, seteamos el valor de la propiedad favorito del objeto store ...store.favoritos
            },

            eliminarFavorito: (favorito) => {
                console.log("funciona");
                let store = getStore(); //aca declaro una variable store y guardo la llamada del objeto store del flux
                setStore({
                    favoritos: store.favoritos.filter((fav) => fav !== favorito),
                }); // aca seteamos, con set store, seteamos el valor de la propiedad favorito del objeto store ...store.favoritos
            },

            // changeColor: (item) => {
            //   let store = getStore();
            //   if (store.favorito.includes(item)) {
            //     return "fa fa-heart";
            //   } else {
            //     return "far fa-heart";
            //   }
            // },
        },
    };
};

export default getState;