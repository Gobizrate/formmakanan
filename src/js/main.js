document.getElementById("lihatKomentar").addEventListener("click", function(event) {
    event.preventDefault();
    const komenSection = document.getElementById("komen");
    komenSection.classList.toggle("hidden"); 
});
