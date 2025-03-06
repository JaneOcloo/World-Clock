function updateTime() {
  const citiesDiv = document.getElementById("cities");
  const cityElements = citiesDiv.getElementsByClassName("city");

  for (let city of cityElements) {
    let timezone = city.dataset.timezone;
    if (timezone) {
      let now = moment().tz(timezone);
      city.querySelector(".city-date").textContent = now.format("MMMM D, YYYY");
      city.querySelector(".time").textContent = now.format("HH:mm:ss");
    }
  }
}

function updateCity() {
  const select = document.getElementById("citySelect");
  const selectedTimezone = select.value;
  const selectedCity = select.options[select.selectedIndex].text;

  if (!selectedTimezone) return;

  const citiesDiv = document.getElementById("cities");
  citiesDiv.innerHTML = ""; // Remove previous cities

  const newCityDiv = document.createElement("div");
  newCityDiv.classList.add("city");
  newCityDiv.dataset.timezone = selectedTimezone;
  newCityDiv.innerHTML = `
                <h3>${selectedCity}</h3>
                <div class="city-date"></div>
                <div class="time"></div>
            `;

  citiesDiv.appendChild(newCityDiv);
  updateTime();
}

document.getElementById("citySelect").addEventListener("change", updateCity);
setInterval(updateTime, 1000); // Update time every second
