
var submitbtn = document.getElementById('submitbtn');
var cityval = document.getElementById('cityval');
var cityname = document.getElementById('cityname');
var city = cityname.value;
var tempinfo = document.getElementsByClassName('tempinfo')[0];
var lon = document.getElementById('lon');
var lat = document.getElementById('lat');
var current_temp = document.getElementById('current_temp');
var min_temp = document.getElementById('min_temp');
var max_temp = document.getElementById('max_temp');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');
var sealevel = document.getElementById('sealevel');
var groundlevel = document.getElementById('groundlevel');
var country = document.getElementById('country');


const getValue = async (event) => {
    event.preventDefault();

    // let cityname = document.getElementById('cityname');
    let city = cityname.value;
    console.log(city)
    if (city == "") {
        cityval.innerText = "Please Enter the city name";
        console.log(tempinfo);
        tempinfo.style.display = 'none'
    }
    else {
        try {
            tempinfo.style.display = 'flex';
        
            var upi = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=c02f7b317c145e68b298758d03da36b7';
            
            console.log(upi)
            const result = await fetch(upi);
            const data = await result.json();
            const dataarr = [data];
            console.log(dataarr);
            if (dataarr[0].cod == "404"){
                console.log("Sorry");
                let infocard = document.getElementsByClassName("infocard")[0].style.visibility = "visible"
                document.getElementsByClassName("cityinfo")[0].style.visibility = "hidden"
                document.getElementsByClassName("tempinfo")[0].style.visibility = "hidden"
                document.getElementsByClassName('notfound')[0].style.visibility = 'visible'
            }
            else{
                document.getElementsByClassName('notfound')[0].style.visibility = 'hidden';
                console.log((dataarr[0].main.temp))
                cityval.innerText = dataarr[0].name + " , ";
                lon.innerText = dataarr[0].coord.lon;
                lat.innerText = dataarr[0].coord.lat;
                current_temp.innerText = dataarr[0].main.temp;
                min_temp.innerText = dataarr[0].main.temp_min;
                max_temp.innerText = dataarr[0].main.temp_max;
                pressure.innerText = dataarr[0].main.pressure;
                humidity.innerText = dataarr[0].main.humidity;
                sealevel.innerText = dataarr[0].main.sea_level;
                groundlevel.innerText = dataarr[0].main.grnd_level;
                country.innerText = dataarr[0].sys.country;
                document.getElementsByClassName("infocard")[0].style.visibility = "visible";
                document.getElementsByClassName("cityinfo")[0].style.visibility = "visible"
                document.getElementsByClassName("tempinfo")[0].style.visibility = "visible"
            }
            
        } catch (error) {
            console.log(error);
        }
    }

}

submitbtn.addEventListener('click', getValue);