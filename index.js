const API_URL =  "https://planets-api.vercel.app/api/v1/planets/mercury";
const planetName = document.querySelectorAll(".menu-links");
const burger = document.querySelector(".burger-btn");
const getPlanets = async()=>{
    const response = await fetch(API_URL);
    const data = await response.json();
    render(data);


    planetName.addEventListener("click", (event) =>{
        const chosenPlanet = event.target.value;
        const filterData = data.filter(
            (planet)=> planet.name.toLowerCase().includes(chosenPlanet).toLowerCase()
        );
        render(filterData);
    })
}


    getPlanets();

