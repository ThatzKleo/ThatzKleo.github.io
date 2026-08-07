function siteCandE() {
    const site = document.getElementById("Expand");
    site.classList.toggle("open");

    const btn = document.querySelector('button[onclick="collapseandexpand()"]');
    btn.textContent = site.classList.contains("open") ? "Show less" : "Show more";
}
function otherCandE() {
    const other = document.getElementById("Expand1");
    other.classList.toggle("open");

    const btn = document.querySelector('button[onclick="collapseandexpand()"]');
    btn.textContent = other.classList.contains("open") ? "Show less" : "Show more";
}