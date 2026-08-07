function collapseandexpand() {
    const div = document.getElementById("Expand");
    div.classList.toggle("open");

    const btn = document.querySelector('button[onclick="collapseandexpand()"]');
    btn.textContent = div.classList.contains("open") ? "Show less" : "Show more";
}