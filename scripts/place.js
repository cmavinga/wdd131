const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

function calculateWindChill(temperature, windspeed) {
    if (temperature > 10 || windspeed < 4.8)
        return "N/A";   

    const temperatureF = (temperature * 9 / 5) + 32;
    const windspeedMPH = windspeed / 1.609;

    const windchillF = 35.74 
        + (0.6215 * temperatureF) 
        - (35.75 * (windspeedMPH ** 0.16)) 
        + (0.4275 * temperatureF * (windspeedMPH ** 0.16));

    const result = (windchillF - 32) * 5 / 9;
    return result;
}

const result = calculateWindChill(10, 5); 
document.getElementById("windChillResult").textContent = result.toFixed(1) + " °C";

