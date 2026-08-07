function siteCandE() {
    const site = document.getElementById("Expand");
    site.classList.toggle("open");

    const btn = document.querySelector('button[onclick="collapseandexpand()"]');
    btn.textContent = site.classList.contains("open") ? "Show less" : "Show more";
}
function TuneEngineCandE() {
    const TuneEngineCandE = document.getElementById("Expand1");
    TuneEngineCandE.classList.toggle("open");

    const btn = document.querySelector('button[onclick="collapseandexpand()"]');
    btn.textContent = TuneEngineCandE.classList.contains("open") ? "Show less" : "Show more";
}