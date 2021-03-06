const inputText = document.querySelector('.inputText');
const button = document.querySelector('.btn')
const showData = document.querySelector('.showData')

const apiKey = "f5033f35557c18d54f4091754b9241d8";

button.addEventListener('click', ()=>{

    const cityInput = inputText.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        const icon = data.weather[0].icon; 
        let c = Math.floor(data.main.temp - 273.15);
        showData.innerHTML = `
        
                <ul>
                    <li class="desc">${data.weather[0].description}</li>
                    <li class="city">${data.name}</li>
                    <li class="temp">${c}°C</li>
                    <li class="temp"><img class= "weather-icon" src= "https://openweathermap.org/img/w/${icon}.png"/></li>
                    
                </ul>
        
        `


    })

})


