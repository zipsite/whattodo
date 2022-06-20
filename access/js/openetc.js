let etcbox = document.getElementById("etcbox");

etcbox.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("check-elem-close");
    e.currentTarget.classList.toggle("check-elem-open");
});