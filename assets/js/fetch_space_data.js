document.addEventListener("DOMContentLoaded", function () {
    const apiUrls = {
        solarWind: "https://services.swpc.noaa.gov/json/ace/swepam.json",
        magneticField: "https://services.swpc.noaa.gov/json/ace/mag.json",
        cosmicRays: "https://cosmicrays-api-url.com/data",
        gravitationalWaves: "https://gravitationalwaves-api-url.com/data",
        darkMatter: "https://darkmatter-api-url.com/data"
    };

    function fetchData(url, key) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    let latest = data[data.length - 1];
                    if (key === "solarWind") {
                        document.getElementById("density").innerText = latest.density + " cm³";
                        document.getElementById("speed").innerText = latest.speed + " km/s";
                        document.getElementById("temperature").innerText = latest.temperature + " K";
                    } else if (key === "magneticField") {
                        document.getElementById("earth_bx").innerText = latest.bx_gsm + " nT";
                        document.getElementById("earth_by").innerText = latest.by_gsm + " nT";
                        document.getElementById("earth_bz").innerText = latest.bz_gsm + " nT";
                    }
                }
            })
            .catch(error => console.error("數據加載失敗 | Data Fetch Failed:", error));
    }

    for (let key in apiUrls) {
        fetchData(apiUrls[key], key);
    }
});
