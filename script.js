

//https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=dd8faffa3699eb676f6259ac30bd55cd

const apiKey="dd8faffa3699eb676f6259ac30bd55cd"
const search=document.querySelector(".Search")
const city=document.querySelector(".city1")
const para=document.querySelector(".parameters")
const place=document.querySelector(".city")
const main=document.querySelector(".main")
const left=document.querySelector(".left")
const bg=document.querySelector(".bg")
const tempa=document.querySelector(".temp")

 function getsWeather() {
  
 // let location = document.getElementById("location");

   let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "dd8faffa3699eb676f6259ac30bd55cd";

  // location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=metric";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        sunrise=data.sys.sunrise
        //sunset=data.sys.sunset
          date = new Date(sunrise * 1000);
         // dateNew= new Date(sunset*1000)
         // const myJson=JSON.stringify(date)
          //var today = new Date();
          const time = date.getHours() + ":" + date.getMinutes() ;
//const timeDusk = dateNew.getHours()-12 + ":" + dateNew.getMinutes() ;
       
        place.innerHTML=`  <p class="city">${data.name}</p>`
  city.innerHTML=` <span class="temp">${data.main.temp}°C</span>

  <p id="des">${data.weather[0].description}</p>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" >`
  console.log(city)
  


  para.innerHTML=`
  <div class="humid">
  
  <div class="humid2">
      <p>Humidity</p>
 <h2>${data.main.humidity}%</h2>
</div>

</div>

<div class="windS">

<div class="wind">
  <p>Wind speed</p>
 <h2 id="windspeed">${data.wind.speed} km/hr</h2>
</div>
</div>
</div>


<div class="feel">
<p>Feels like</p>
<h2 id="feels-like">${data.main.feels_like}°C</h2>
<p>Max-temp</p>
<h2>${data.main.temp_max}°C</h2>
<p>Min-temp</p>
<h2>${data.main.temp_min}°C</h2>

<p>Wind Gust</p>
<h2>${data.wind.gust} km/hr</h2>
<p>Sunrise</p>
<h2>${time} A.M</h2>
</div>

`
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

getsWeather();


const getWeather= async (city)=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const response= await fetch(url)
  //console.log(response)
  const data=await response.json()
console.log(data)
 return showWeather(data)

}
const getWeatherr= async (city)=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const response= await fetch(url)
  //console.log(response)
  const data=await response.json()
console.log(data)
 return atmosphere(data)
 

 }
const showWeather=(data)=>{

sunrise=data.sys.sunrise
//sunset=data.sys.sunset
  date = new Date(sunrise * 1000);
  const time = date.getHours() + ":" + date.getMinutes() ;
  //dateNew= new Date(sunset*1000)
 // const myJson=JSON.stringify(date)
  //var today = new Date();


//const timeDusk = dateNew.getHours() + ":" + dateNew.getMinutes() ;
  
// utcString = dateObj.toUTCString();
// time = utcString.slice(-11, -4);
console.log(time)
//console.log(timeDusk)
//console.log(date)
//console.log(myJson)
 


  place.innerHTML=`  <p class="city">${data.name}</p>`
  city.innerHTML=` <span class="temp">${data.main.temp}°C</span>

  <p id="des">${data.weather[0].description}</p>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" >
  <p class="date"></p>
   <p class="date"></p>`
  console.log(city)
  


  para.innerHTML=`
  <div class="humid">
  
  <div class="humid2">
      <p>Humidity</p>
 <h2>${data.main.humidity}%</h2>
</div>

</div>

<div class="windS">

<div class="wind">
  <p>Wind speed</p>
 <h2 id="windspeed">${data.wind.speed} km/hr</h2>
</div>
</div>
</div>


<div class="feel">
<p>Feels like</p>
<h2 id="feels-like">${data.main.feels_like}°C</h2>
<p>Max-temp</p>
<h2>${data.main.temp_max}°C</h2>
<p>Min-temp</p>
<h2>${data.main.temp_min}°C</h2>

<p>Wind Gust</p>
<h2>${data.wind.gust} km/hr</h2>
<p>Sunrise</p>
<h2>${time} A.M</h2>
</div>

`
}
function atmosphere (data){
  
  
  if(data.weather[0].main=="Clouds"||data.weather[0].main=="Mist"){
    left.style.backgroundImage = "url('images/Mist.jpg')"
    bg.style.backgroundImage = "url('images/Mist.jpg')";
    }
  if(data.weather[0].main=="Clear"){
    left.style.backgroundImage = "url('images/sun.jpg')"
    bg.style.backgroundImage = "url('images/sun.jpg')";
    
  }
  if(data.weather[0].description=="clear sky"){
    left.style.backgroundImage = "url('images/sun.jpg')"
    bg.style.backgroundImage = "url('images/sun.jpg')";
    place.style.color="white"
    // tempa.style.color="black"  //check
    

 }
  if(data.weather[0].main=="Rain"){
    left.style.backgroundImage = "url('images/rain.jpg')"
    bg.style.backgroundImage = "url('images/rain.jpg')";
  }
  }

const button=document.querySelector(".btn")
button.addEventListener("click",(e)=>{
 //getFirstLocation()
 //getstWeather()
  getWeather(search.value)
  getWeatherr(search.value)
  e.preventDefault();
  document.getElementById("form").reset()
  //clear()
 // getWeatherr(search.value)
 //showWeather(data)
 
 
 
 //return showWind(data)
})






// function clear(){
//  button.addEventListener("submit",()=>{
//   search.reset()
// })}


//   base:"https://api.openweathermap.org/data/2.5/"


// }
// const searchbox=document.querySelector(".Search")
// searchbox.addEventListener("keypress",setQuery)
// function setQuery(evt){
//   if(evt.keycode==13){
//     getResults(searchbox.value)
//   }
// }
// function getResults(query){
//   fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
//   .then((weather)=>{
//     return weather.json();
//   })
//   .then(displayResult)
//   }
// function displayResult(weather){
//   console.log(weather)
//   // let city=document.querySelector(".city");
//   // city.innerText=`${weather.name}`
//   // let now= new Date();
//   // let date=document.querySelector()
//   //date.innerText=dateBuilder(now)
//   let temp=document.querySelector(".temp")
//   temp.innerHTML=`${Math.round(weather.main.temp)}<span>C</span>`
//  // let weatherel=document.querySelector
  
// }
// // document.querySelector(".city1").addEventListener('click',()=>{
// //   let temp= Math.floor(Math.random()*50);
// //   let temp1= temp.toString() + "°C"; //temp1 ko string banane k liye
// //   console.log(temp1);
  
// //   document.getElementsByClassName("temp")[0].innerHTML = temp+ "°C ,"; //classnamr array return karta hai

  
// // });

// // document.querySelector(".humid").addEventListener('click',()=>{
// //   let hum= Math.floor(Math.random()*50);
// //   let hum1= hum.toString() + "%"; //temp1 ko string banane k liye
// //   console.log(hum1);
  
// //   document.querySelectorAll("h2")[1].innerHTML = hum1; //classnamr array return karta hai

  
// // });

// // document.querySelector(".wind").addEventListener('click',()=>{
// //   let wind1= Math.floor(Math.random()*50);
// //   let wind2= wind1.toString() ; //temp1 ko string banane k liye
// //   console.log(wind2);
  
// //   //document.getElementsByClassName("wind")[0].innerHTML = wind2; //classnamr array return karta hai
// //   document.querySelectorAll("h2")[2].innerHTML= wind2 +"km/hr"; //classnamr array return karta hai

  
// // });
// <h2>${data.main.feels_like}</h2>
  // <h2>${data.main.temp_max}</h2>
  // <h2>${data.main.temp_min}</h2>
  // <h2>${data.sys.sunrise}</h2>
  // <h2>${data.sys.sunset}</h2>`
  
// const showHumidity=(data)=>{
//   city.innerHTML=` <span class="temp">${data.main.temp}</span>`
//   console.log(city)

// }
// left.style.backgroundImage = "url('images/rain.jpg')";
  //  left.style.backgroundRepeat = "no-repeat";
  //  left.style.backgroundSize = "cover";
  //   // document.body.style.backgroundImage = "url('images/rain.jpg')";
  //   // document.body.style.backgroundRepeat = "no-repeat";
  //   // document.body.style.backgroundSize = "cover";
  // const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  // const response= await fetch(url)
  // //console.log(response)
  // const data=await response.json()