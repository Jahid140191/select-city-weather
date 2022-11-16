let cityName={
    dhaka:{lat:23.7644025,lon:90.389015},
    rajshahi:{lat:24.6285432,lon:89.0376862},
    khulna:{lat:22.9372087,lon:89.2852741},
    rongpur:{lat:25.7352174,lon:89.2492586}
}


let key="72822df25b09ca945c52be0282ac1bbc";

async function getResult(){

    let inputCity= document.querySelector('#city').value
    let display= document.querySelector('#display');


    let url= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityName[inputCity].lat}&lon=${cityName[inputCity].lon}&appid=${key}&units=metric`);
    
    let data= await url.json();
    console.log(data);

    let name=data.name;
    let tamp = data.main.temp;
    let descrip =data.weather[0].description;
    
     console.log(descrip)
    display.innerHTML="City Name : "+name+"<br>Temperature : "+tamp+"<br>Description : "+descrip+"<br>";


}
