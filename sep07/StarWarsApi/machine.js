const url = 'https://swapi.dev/api/'; 

const people = document.querySelector('#people');
const starships = document.querySelector('#starships');
const planets = document.querySelector('#planets');

const next = document.querySelector('#simpleContainer');
const previous = document.querySelector('#previous');


starships.addEventListener('click', ()=>{
    renderStarships();
});

planets.addEventListener('click', ()=>{
    renderPlanets();
});

people.addEventListener('click', ()=>{
    renderPeople();
});



async function getData(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('We had a problem heh :/', error);
    }

}

async function renderStarships() {
    try {
        const urlStarships = await getData();
        
        const response = await fetch(urlStarships.starships);
        const data = await response.json();
        const renderData = data.results;
        console.log(renderData);

        let i = 0;
        const containerObjects = document.querySelector('#containerCards');
        containerObjects.innerHTML = "";
        while(i < 3){
        renderData.forEach(element => {
         
            const container = document.createElement('div');
            container.classList.add('cardsInfo')
            container.innerHTML = `<p>Name: ${element.name}</p>
                                   <p>Model: ${element.model}</p>
                                   <p>Manufacturer: ${element.manufacturer}</p>
                                   <p>Crew: ${element.crew}</p>`;
            containerObjects.appendChild(container);
            i++
        });
    }


    } catch (error) {
        console.error('We had a problem heh :/', error);
    }
}

async function renderPeople() {
    try {
        const urlPeople = await getData();
 
        const response = await fetch(urlPeople.people);
        const data = await response.json();
        const renderData = data.results;

        
        const containerObjects = document.querySelector('#containerCards');
        containerObjects.innerHTML = "";
        console.log(renderData);

        let i = 0;
        while(i < 3){
        renderData.forEach(element => {
           
            const container = document.createElement('div');
            container.classList.add('cardsInfo')
            container.innerHTML = `<p>Name: ${element.name}</p>
                                   <p>Eyes color: ${element.eye_color}</p>
                                   <p>Mass: ${element.mass}</p>
                                   <p>Height: ${element.height}</p>`;
            containerObjects.appendChild(container);
            i++
            
        });
        }
        
    } catch (error) {
        console.error('We had a problem heh :/', error);
    }
}




async function renderPlanets() {
    try {
        const urlPlanets = await getData();
        
        const response = await fetch(urlPlanets.planets);
        const data = await response.json();
        const renderData = data.results;
        let i = 0;
        const containerObjects = document.querySelector('#containerCards');
        containerObjects.innerHTML = "";
        while(i < 3){
    renderData.forEach(element => {
     
        const container = document.createElement('div');
        container.classList.add('cardsInfo')
        container.innerHTML = `<p>Name: ${element.name}</p>
                               <p>Climate: ${element.climate}</p>
                               <p>Terrain: ${element.terrain}</p>
                               <p>Population: ${element.population}</p>`;
        containerObjects.appendChild(container);
        i++
    
    
});
}  
    } catch (error) {
        console.error('We had a problem heh :/', error);
    }
}









