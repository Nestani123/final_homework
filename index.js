const menu_btn = document.querySelector('.burger-btn');
	const mobile_menu = document.querySelector('.menu-links');
   

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
       
	});
  const menu_buttons = mobile_menu.querySelectorAll('.planet');
menu_buttons.forEach(button => {
    button.addEventListener('click', function() {
        
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
});





    const API_URL = "https://planets-api.vercel.app/api/v1/planets/"
   
    
    const planetName =document.querySelector(".planetName")
    const planetImage = document.querySelector(".planet")
    const planetDescription = document.querySelector(".planet_description")
    const planets = document.querySelectorAll(".planet-name") 
    const rotation = document.querySelector(".numb_descrip")
    const revolution = document.querySelector(".numb_descrip")
    const radius = document.querySelector(".numb_descrip")
    const temperature = document.querySelector(".numb_descrip")
    const overviewButton = document.querySelector(".infocontainer")
    const planetsButton = document.querySelectorAll(".planet-name")
    const structureButton = document.querySelector(".infocontainer")
    const geologyButton = document.querySelector(".infocontainer")
    const btnElist = document.querySelectorAll('.btn')

    const wikiURL= "https://en.wikipedia.org/wiki/"
    const wikipediaSource = document.querySelector(".wikipedia_address")


  
    async function getPlanets(user) {
  try {
    const response = await fetch(API_URL + user);
    const data = await response.json();
    rotation.innerHTML = data.rotation;
    revolution.innerHTML = data.revolution;
    radius.innerHTML = data.radius;
    temperature.innerHTML = data.temperature;
    overviewButton.style.backgroundColor = 'transparent';
    structureButton.style.backgroundColor = 'transparent';
    geologyButton.style.backgroundColor = 'transparent';

   
    overviewButton.addEventListener('click', () => {
        overviewButton.style.backgroundColor = data.color;
    });
    structureButton.addEventListener('click', () => {
        structureButton.style.backgroundColor = data.color;
    });
    geologyButton.addEventListener('click', () => {
        geologyButton.style.backgroundColor = data.color;
    });
   








    planetImage.innerHTML = `
        <img class="image-box" src = ${data.images.planet} />`;
    planetDescription.innerHTML = `
        <p class="aboutMe"> ${data.overview.content} </p>`;

    planetName.innerHTML = `<h1 class="main-text">${data.name} </h1>`;
    








    overviewButton.addEventListener("click", () => {
      planetImage.innerHTML = `
          <img class="image-box" src = ${data.images.planet} />`;
      planetDescription.innerHTML = `
        <p class="aboutMe"> ${data.overview.content} </p>`;
      overviewButton.style.backgroundColor = `<div class="info-first">${data.overview.color}</div>`;
      overviewButton.target.style.backgroundColor = `${data.overview.color}`;

    });



    structureButton.addEventListener("click", () => {
      planetImage.innerHTML = `
        <img class="image-box" src=${data.images.internal} />`;
      planetDescription.innerHTML = `
        <p class="aboutMe"> ${data.structure.content} </p>`;
      structureButton.style.backgroundColor = `<div class="info-first">${data.structure.color}</div>`;

    });
    geologyButton.addEventListener("click", () => {
      planetImage.innerHTML = `
           <img class="image-box" src=${data.images.planet} />
            <img class="geologyImg" src=${data.images.geology} />
            `;
      planetDescription.innerHTML = `
            <p class="aboutMe"> ${data.geology.content} </p>`;
      geologyButton.style.backgroundColor = `<div class="info-first">${data.geology.color}</div>`;

    });

    rotation.innerHTML = `
          <p class="rotationNumb">${data.rotation}</p>`;

          wikipediaSource.addEventListener('click', () => {
            wikipediaSource.href = data.overview.source
        });

  }

  catch (error) {
    console.log(error);
  }
}
  

    getPlanets("mercury")

    for (let i=0; i<planets.length; i++) {
      planets[i].addEventListener('click', () => {
          getPlanets(planets[i].textContent)
                      })

                    
                  
                      
                              
                                btnElist.forEach(btnEl => {
                                  btnEl.addEventListener("click", () => {
                                      
                                      btnElist.forEach(btn => {
                                          btn.style.backgroundColor = 'transparent';
                                          btn.classList.remove("active");
                                      });
                                     
                                      btnEl.style.backgroundColor = '#419EBB'; 
                                      btnEl.classList.add("active");

                                    })

                                  });
                              };
                            
                              btnElist.forEach(btnEl => {
                                btnEl.addEventListener("click", () => {
                                    if (window.innerWidth <= 375) {
                                        
                                        btnElist.forEach(btn => {
                                            btn.style.backgroundColor = 'transparent';
                                            btn.classList.remove("active");
                                        });
                                    }
                                    
                                    btnEl.style.backgroundColor = 'transparent'; 
                                    btnEl.classList.add("active");
                                });
                            });
