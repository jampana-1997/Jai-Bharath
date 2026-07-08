const container = document.getElementById("stateContainer");
const search = document.getElementById("search");

function displayStates(list) {
    container.innerHTML = "";

    list.forEach((state) => {
        container.innerHTML += `
            <div class="card">
                <h3>${state.name}</h3>

                <p><b>Capital:</b> ${state.capital}</p>

                <p><b>Population:</b> ${state.population}</p>

                <p><b>Area:</b> ${state.area}</p>

                <p><b>Language:</b> ${state.language}</p>
            </div>
        `;
    });
}

displayStates(states);

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const filtered = states.filter((state) =>
        state.name.toLowerCase().includes(value)
    );

    displayStates(filtered);
});
function updateDateTime(){

const now = new Date();

document.getElementById("datetime").innerHTML =
now.toLocaleDateString() +
" | " +
now.toLocaleTimeString();

}

setInterval(updateDateTime,1000);

updateDateTime();
const exploreBtn = document.querySelector("button");

exploreBtn.addEventListener("click", () => {
    document.getElementById("states").scrollIntoView({
        behavior: "smooth"
    });
});