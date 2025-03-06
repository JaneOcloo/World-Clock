function updateTime() {
  let losAngeles = document.querySelector("#los");
  let losAngelesDate = losAngeles.querySelector(".city-date");
  let losAngelesTime = losAngeles.querySelector(".time");

  losAngelesDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM D, YYYY");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss:[<small>]SS[<small>]");

  let amsterdam = document.querySelector("#ams");
  let amsterdamDate = amsterdam.querySelector(".city-date");
  let amsterdamTime = amsterdam.querySelector(".time");

  amsterdamDate.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("MMMM D, YYYY");
  amsterdamTime.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("HH:mm:ss:[<small>]SS[<small>]");

  let telAviv = document.querySelector("#tel");
  let telAvivDate = telAviv.querySelector(".city-date");
  let telAvivTime = telAviv.querySelector(".time");

  telAvivDate.innerHTML = moment().tz("Asia/Jerusalem").format("MMMM D, YYYY");
  telAvivTime.innerHTML = moment()
    .tz("Asia/Jerusalem")
    .format("HH:mm:ss:[<small>]SS[<small>]");

  let zurich = document.querySelector("#zur");
  let zurichDate = zurich.querySelector(".city-date");
  let zurichTime = zurich.querySelector(".time");

  zurichDate.innerHTML = moment().tz("Europe/Zurich").format("MMMM D, YYYY");
  zurichTime.innerHTML = moment()
    .tz("Europe/Zurich")
    .format("HH:mm:ss:[<small>]SS[<small>]");
}

setInterval(updateTime, 1000);
updateTime();
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city" id="los">
          <h2>${cityTimeZone}</h2>
          <div class="city-date">${cityTime.format("MMMM D, YYYY")}</div>
          <div class="time">${cityTime.format(
            "HH:mm:ss:[<small>]SS[<small>]"
          )}</div>
        </div>
  
  
  
  `;
}

let cityElement = document.querySelector("#cities");
cityElement.addEventListener("change", updateCity);
