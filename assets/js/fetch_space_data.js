document.addEventListener("DOMContentLoaded", function () {
    const apiUrls = {
        alpha: "https://api.nasa.gov/some_endpoint?api_key=UlxbY1TIgdhFZkW4FgeIcrOa3Ttb4TVYU4W3nV3S",
        B: "https://api.nasa.gov/magnetic_field?api_key=UlxbY1TIgdhFZkW4FgeIcrOa3Ttb4TVYU4W3nV3S",
        lambda: "https://api.nasa.gov/her_shield_wavelength?api_key=UlxbY1TIgdhFZkW4FgeIcrOa3Ttb4TVYU4W3nV3S",
        rho_DM: "https://api.nasa.gov/dark_matter_density?api_key=UlxbY1TIgdhFZkW4FgeIcrOa3Ttb4TVYU4W3nV3S",
        v: "https://api.nasa.gov/dark_matter_velocity?api_key=UlxbY1TIgdhFZkW4FgeIcrOa3Ttb4TVYU4W3nV3S",
        r: "https://api.nasa.gov/distance?api_key=UlxbY1TIgdhFZkW4FgeIcrOa3Ttb4TVYU4W3nV3S"
    };

    function fetchData(url, id) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById(id).innerText = data.value;
            })
            .catch(() => {
                document.getElementById(id).innerText = "數據不可用 | Data Unavailable";
            });
    }

    for (let key in apiUrls) {
        fetchData(apiUrls[key], `${key}-value`);
    }
});
