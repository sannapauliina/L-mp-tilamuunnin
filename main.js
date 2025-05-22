
function convertTemperature() {
    const conversionType = document.getElementById("conversionType").value;
    const temperatureInput = document.getElementById("temperatureInput").value.trim();
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("errorMessage");

    resultElement.textContent = "";
    errorElement.textContent = "";

    if (temperatureInput === "" || isNaN(temperatureInput)) {
        errorElement.textContent = "Virhe: Anna kelvollinen numero!";
        return;
    }

    let temperature = parseFloat(temperatureInput);

    if (conversionType === "toCelsius" && temperature < -459.67) {
        errorElement.textContent = "Virhe: Syötetty lämpötila on pienempi kuin absoluuttinen nollapiste (-459.67°F)!";
        return;
    } else if (conversionType === "toFahrenheit" && temperature < -273.15) {
        errorElement.textContent = "Virhe: Syötetty lämpötila on pienempi kuin absoluuttinen nollapiste (-273.15°C)!";
        return;
    }

    let convertedTemperature;
    if (conversionType === "toCelsius") {
        convertedTemperature = (temperature - 32) * 5/9;
    } else {
        convertedTemperature = (temperature * 9/5) + 32;
    }

    // desimaalitarkkuus
    const decimalPrecision = document.querySelector('input[name="decimalPrecision"]:checked').value;

    resultElement.textContent = `Muunnettu lämpötila: ${convertedTemperature.toFixed(decimalPrecision)}°`;
}
