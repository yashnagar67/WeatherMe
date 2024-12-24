function getCurrentDateTime() {
  const now = new Date();
  const dt= {day:"numeric" };
  const mn = {month:"short" };
  const wk = {weekday:"short" };
  const hour = {hour:"numeric" ,minute:"numeric"};

  const dat = now.toLocaleDateString('en-US', dt);
  const mont = now.toLocaleDateString('en-US', mn);
  const weekday = now.toLocaleDateString('en-US', wk);
  const h = now.toLocaleTimeString('en-US', hour);


  return {dat,mont,weekday,h};
}
function drepeat(){
const dtmn= getCurrentDateTime();
 date=dtmn.mont+ " " + dtmn.dat + " ," + dtmn.weekday;


tm.innerHTML=date;
}
setInterval(drepeat,100000)

function settime(){
  // time.innerHTML=dtmn.h
  
  
}


// tm.innerHTML=date;
// setInterval(set_time,1000)
//   console.log(dtmn.h);
function repeat (){
  const ttime= getCurrentDateTime();
  time.innerHTML=ttime.h;
 
  
}
 
setInterval(repeat,1000);

// setInterval(reloadpage,1000);
// weekday.innerhtml=getCurrentMonth("day");
// month.innerHTML = getCurrentMonth("month");
const getweather=async(city)=>{
  


const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+city;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3c67df3bf6msh7a57d04a85bbe57p1c8f9cjsnb32417c244f1',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};


// async function fetchWeatherData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
// const temprature =  await result.temp_c;
//     console.log(temprature);
    temperature.innerHTML=result.current.temp_c+"°C";
    cityname.innerHTML=result.location.name;
    Visiblity.innerHTML=result.current.vis_km;
    Airpressure.innerHTML=result.current.pressure_in;

    console.log(result.current.humidity)
    console.log(result.current.vis_km);
    console.log(result.current.wind_mph);
    console.log(    Airpressure.innerHTML=result.current.pressure_in);
    wind_mph.innerHTML=result.current.wind_mph;
    console.log("cloud"+result.current.cloud)
    

    humidity.innerHTML=result.current.humidity;
    console.log(result.current.condition.text)
    console.log(result)
    let iconurl=result.current.condition.icon;
    

    if(result.current.is_day==0){
      daynight.innerHTML=`<img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Weather icon">`   ;
      
    }
    else if(result.current.is_day==1){
      daynight.innerHTML=`<img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Weather icon">`   ;

    }
    
    let condition=result.current.condition.text;
    let emoji;
    switch (condition.toLowerCase()) {
        case 'clear sky':
            emoji = '☀️';
            break;
        case 'few clouds':
        case 'scattered clouds':
        case 'partly cloudy':
            emoji = '🌤️'; // Partly cloudy emoji
            break;
        case 'broken clouds':
        case 'overcast clouds':
            emoji = '☁️'; // Cloudy emoji
            break;
        case 'shower rain':
        case 'rain':
        case 'light rain':
            emoji = '🌧️';
            break;
        case 'thunderstorm':
            emoji = '⛈️';
            break;
        case 'snow':
            emoji = '❄️';
            break;
        case 'mist':
        case 'fog':
            emoji = '🌫️';
            break;
        default:
            emoji = '🌈';
    }

    emojiElement.innerText = emoji;
    console.log(` Temprature of ${city} :${result.current.temp_c}`);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
  
  
  } 




submit.addEventListener("click",(e)=>{

  getweather(city.value);
  
  
})
getweather("Rajasthan")



