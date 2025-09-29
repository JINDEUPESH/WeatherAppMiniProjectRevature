
document.querySelector("#searchButton").addEventListener('click', async () => {

    let city = document.querySelector("#query").value.trim();

    let container = document.querySelector("#main");
    let div = document.querySelector("#result");

    if(!div) {
        div = document.createElement("div");
        div.id = "result";
        container.appendChild(div);
    }

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0135295f345650da3efd224dd8defb69&units=metric`);

        let parsedResponse = await response.json();
        console.log(parsedResponse);    

        if(parsedResponse.cod === 200) {
            div.innerHTML = `
            <h3>Weather in ${parsedResponse.name} </h3>
            <h2>Temparature : ${parsedResponse.main.temp} Degree Centigrade</h2>
            <h2>Condition: ${parsedResponse.weather[0].description}</h2>
            <h2>Wind: ${parsedResponse.wind.speed} m/s</h2>
            `;
        } else {
            div.innerHTML = `<p style="color:red;">${parsedResponse.message}</p>`;
        }
    } catch(error) {
        div.innerHTML = `<p style="color:red;">Error fetching weather data</p>`;
        console.log(error);
    }
});
