const apiKey = "0815991f9334c7039f18fee7f41ce380";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                
            }else{
                
            
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                /*
                    document.querySelector() >> selects element

                    data.name >> "name" is the data that I want to select
                    data.main.temp >> "temp" is in "main"
                */

                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png";
                } else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png";
                } else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                } else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png";
                } else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png";
                } else{
                    weatherIcon.src = "images/snow.png";
                }; 

                document.querySelector(".weather").style.display = "block";
                // checks if error msg still there, if there is, it sets display = none
                document.querySelector(".error").style.display = "none"

                /*
                    in css, the fault value for display = none
                    but when this function is run, display = block
                */
            
            }

        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        // when button is pressed, the checkWeather function will run and will get the value from the searchBox