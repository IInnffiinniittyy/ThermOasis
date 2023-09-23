// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


function getData(){
    let city = document.getElementById("query").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36ceded298c3f091691d92e304879f9c`;

    fetch(url).then(function(res){
        // console.log(res);
        // let data = res.json();
        // console.log(data);
        return res.json();
    }).then(function(res){
        console.log(res);
        append(res);
    }).catch(function(err){
        console.log(err);
    })
// when there will be errors then use catch...
}
// embedgooglemap.net
// "https://maps.google.com/maps?q=Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed"

function append(data){

    let url = `https://maps.google.com/maps?q=${data.name}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

    let container = document.getElementById("container");

    container.innerHTML = null;

    let h2 = document.createElement("h2");
    h2.innerText = data.name;
    
    let temp = document.createElement("h3");
    temp.innerText = `Temp:- ${data.main.temp}`;

    let min_temp = document.createElement("h3");
    min_temp.innerText = `Min Temp:- ${data.main.temp_min}`;

    let max_temp = document.createElement("h3");
    max_temp.innerText = `Max Temp:- ${data.main.temp_max}`;

    container.append(h2, temp, min_temp, max_temp );

    let iframe = document.getElementById("gmap_canvas");

    iframe.src = url;

}

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
function geoLocation(){
    
    navigator.geolocation.getCurrentPosition(success); // here success is a callback function

    function success(pos) {
        const crd = pos.coords;
      
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        getWeatherOnLocation(crd.latitude, crd.longitude);
      }

}

// geoLocation(); // onload

// let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=36ceded298c3f091691d92e304879f9c`;

function getWeatherOnLocation(lat, lon){

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=36ceded298c3f091691d92e304879f9c`;

    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res);
        append(res);
    }).catch(function(err){
        console.log(err);
    })
}