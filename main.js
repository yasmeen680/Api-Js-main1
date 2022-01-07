let myHttp = new XMLHttpRequest();

let child = document.getElementById("child");
let topp = document.getElementById("top");
let bottom = document.getElementById("bottom");
let city = prompt("please enter the city","")

myHttp.onreadystatechange = function(){


if (city==null || city=="")
{
    alert("Please enter city name");
    location.reload(true);
}
else {

    if(myHttp.readyState == 4 && myHttp.status == 200) {
        let data = JSON.parse(myHttp.responseText);
        let country = data.location.country;
        let name = data.location.name;
        let temp_c = data.current.temp_c;
        let temp_f = data.current.temp_f;
        let icon = data.current.condition.icon;
        let last_updated = data.current.last_updated;
        let localtime = data.location.localtime;
        
        
        topp.innerHTML = `
            <h2> ${name} </h2>
            <img class="icon" src="${icon}">
            
        
        `;

        bottom.innerHTML = `
        <h3>Country : ${country}</h3>
        <p>Temp in C :${temp_c}</p>    
        <p>Temp in F :${temp_f}</p>    
        <h5>Last Updated : ${last_updated}</h5>  
        <h5>Local Time: ${localtime}</h5>  
        
        `;
    }
    if(myHttp.status == 400){
        alert("Please enter city name");
        location.reload(true);
    }
    
}

}
// myHttp.open("GET" , "http://ritter-cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=8d209985597e405cbdd9ac5834954cd6")
myHttp.open("GET" , `http://api.weatherapi.com/v1/current.json?key=823cd5388a4a42879c9141818212712&q=${city}&aqi=no`)
myHttp.send();
