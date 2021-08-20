let city=document.getElementById("inputfield");
let loc=document.getElementById("locationss");
let tempvalue0=document.getElementById("temp-0");
let tempvalue1=document.getElementById("temps-1");
let tempvalue2=document.getElementById("temps-2");
let badal=document.getElementById("badal");
let btn=document.getElementById("btn");

city.addEventListener("keyup", e=>{
    if(e.key=="Enter" && city.value!==""){
        requestapi(city.value);
    }
})

function requestapi(city){
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=787e8ad7306dbb237292e32c431116d0`;

            fetch(api).then((response)=>{
                return response.json();
            })
            .then(data=>{
                const{name}=data;
                const{feels_like,humidity}=data.main;
                const{id,main}=data.weather[0];
                loc.textContent=name;
                tempvalue0.textContent=Math.round(feels_like-273);
                tempvalue1.textContent=Math.round(feels_like-273);
                badal.textContent=main;
                tempvalue2.textContent=humidity;
            })
            document.querySelector(".city").style.display="none";
            document.querySelector(".weather-part").style.display="flex";
        }

btn.addEventListener("click",()=>{
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lon= position.coords.longitude;
            lat= position.coords.latitude;

            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=787e8ad7306dbb237292e32c431116d0`

            fetch(api).then((response)=>{
                return response.json();
            })
            .then(data=>{
                const{name}=data;
                const{feels_like,humidity}=data.main;
                const{id,main}=data.weather[0];
                loc.textContent=name;
                tempvalue0.textContent=Math.round(feels_like-273);
                tempvalue1.textContent=Math.round(feels_like-273);
                badal.textContent=main;
                tempvalue2.textContent=humidity;
                console.log(data);
                
            })
            document.querySelector(".city").style.display="none";
            document.querySelector(".weather-part").style.display="flex";
        })
    }else{
        alert("error in your browser");
    }

})