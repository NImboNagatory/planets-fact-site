document.addEventListener("DOMContentLoaded", function () {
  const dotContainer = document.getElementById("dot-container");
  const navLinks = document.querySelectorAll("nav > div > h1");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedPlanet = e.target.getAttribute("data-planet");
      const json_adress = "./data.json";
      fetch(json_adress)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
          }
          return response.json(); // Parse the response as JSON
        })
        .then(function (jsonData) {
          // Now, you can work with the JSON data
          const planetData = jsonData;
          const planet = planetData.find(
            (planet) => planet.name === selectedPlanet
          );

          if (planet) {
            // Display the information for the selected planet
            updateMainComponent(planet);
            console.log(planet);
          }
        })
        .catch(function (error) {
          console.error("Error: " + error);
        });
    });
  });

  const numDots = 200; // You can adjust the number of dots.

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Generate random dot size and position
    const size = Math.floor(Math.random() * 10) + 5; // Random size between 5 and 25 pixels
    const x = Math.random() * (dotContainer.offsetWidth - size);
    const y = Math.random() * (dotContainer.offsetHeight - size);

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.backgroundColor = "#fff";
    dot.style.opacity = "0.2";
    dot.style.borderRadius = "50%";
    dot.style.position = "absolute";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    dotContainer.appendChild(dot);
  }
});

function updateMainComponent(planetData) {
  const mainElement = document.querySelector(".overview");
  const planetInfo = mainElement.querySelector(".planet_full_info");
  const planetLink = document.getElementById("data_link")
  const planetName = planetInfo.querySelector("h1");
  const planetOverview = planetInfo.querySelector("p");
  const rotationTime = mainElement.querySelector(".rotation_time h1");
  const revolutionTime = mainElement.querySelector(".revolution_time h1");
  const radius = mainElement.querySelector(".radius h1");
  const averageTemp = mainElement.querySelector(".average_temp h1");
  const planetImage = planetInfo.querySelector(".planet__container img");

  planetName.textContent = planetData.name;
  planetOverview.textContent = planetData.overview.content;
  planetLink.href = planetData.overview.source;
  rotationTime.textContent = planetData.rotation;
  revolutionTime.textContent = planetData.revolution;
  radius.textContent = planetData.radius;
  averageTemp.textContent = planetData.temperature;
  planetImage.src = planetData.images.planet;
}
