function updateTime() {
  let losAngeles = document.querySelector("#los");
  let losAngelesDate = losAngeles.querySelector(".city-date");
  let losAngelesTime = losAngeles.querySelector(".time");

  losAngelesDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM D, YYYY");
  losAngelesTime.innerHTML = moment()
    .clone()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss:[<small>]SS[<small>]");

  let amsterdam = document.querySelector("#ams");
  let amsterdamDate = amsterdam.querySelector(".city-date");
  let amsterdamTime = amsterdam.querySelector(".time");

  amsterdamDate.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("MMMM D, YYYY");
  amsterdamTime.innerHTML = moment()
    .clone()
    .tz("Europe/Amsterdam")
    .format("HH:mm:ss:[<small>]SS[<small>]");

  let telAviv = document.querySelector("#tel");
  let telAvivDate = telAviv.querySelector(".city-date");
  let telAvivTime = telAviv.querySelector(".time");

  telAvivDate.innerHTML = moment().tz("Asia/Jerusalem").format("MMMM D, YYYY");
  telAvivTime.innerHTML = moment()
    .clone()
    .tz("Asia/Jerusalem")
    .format("HH:mm:ss:[<small>]SS[<small>]");

  let zurich = document.querySelector("#zur");
  let zurichDate = zurich.querySelector(".city-date");
  let zurichTime = zurich.querySelector(".time");

  zurichDate.innerHTML = moment().tz("Europe/Zurich").format("MMMM D, YYYY");
  zurichTime.innerHTML = moment()
    .clone()
    .tz("Europe/Zurich")
    .format("HH:mm:ss:[<small>]SS[<small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  //the + sign makes it possible to add the selected city to the existing one. i mean the + sign before the equal to sign:  citiesElement.innerHTML +=
  citiesElement.innerHTML = `
   <div class="city" >
          <h2>${cityName}</h2>
          <div class="city-date">${cityTime.format("MMMM D, YYYY")}</div>
          <div class="time">${cityTime.format(
            "HH:mm:ss:[<small>]SS[<small>]"
          )}</div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#city-selector");
cityElement.addEventListener("change", updateCity);
