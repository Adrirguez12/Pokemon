var pokemon={};

window.onload = () => {

    let menu = document.getElementById("barras-menu");

    menu.onclick = () => {

        if (document.getElementById("menu-movil").classList.contains("menu-movil")) {
            document.getElementById("menu-movil").classList.remove("menu-movil");
        } else {
            document.getElementById("menu-movil").classList.add("menu-movil");
        }
    }

    //Solicitar primeros pokemon
    let url = "https://pokeapi.co/api/v2/pokemon";
    //mostramos loading
    document.getElementById("loading").style.display="block"
    fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.json();
        })
        .then(data => {
            document.getElementById("loading").style.display="none";
            console.log(data); // Aquí puedes trabajar con los datos de respuesta
            for (const pk of data.results){
                if(pokemon[pk.name]==undefined)
                pokemon[pk.name]={url: pk.url}
            }
            cargardatospokemon();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
function cargardatospokemon() {
    for (const pk in pokemon)
    fetch(pokemon[pk].url)
z

    if (!resp.ok) {
        throw new Error('Network response was not ok')
        {
            return resp.json();
        }
    }
}
    