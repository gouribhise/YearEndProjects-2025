search=document.getElementById("search_box").value;
console.log("what is search text:",search)
search_btn=document.getElementById("search_btn")
async function searchInst() {
    const search = document.getElementById("search_box").value.toLowerCase();
    const res = await fetch("http://localhost:3000/instruments");
    const apiData = await res.json();

    // Convert all categories into one array
    const allInstruments = Object.values(apiData).flat();

    // Filter search
    const result = allInstruments.filter(item =>
        item.name.toLowerCase().includes(search)
    );

    // Clear the grid before showing result
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    // If no match
    if (result.length === 0) {
        grid.innerHTML = "<p>No instrument found</p>";
        return;
    }

    // Show only the matched card(s)
    result.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p><small>${item.origin}</small></p>
        `;
        div.onclick = () => openModal(item);
        grid.appendChild(div);
    });
}



    let apiData = {};

    // Fetch data from your Node API
    async function loadData() {
        const res = await fetch("http://localhost:3000/instruments");
        apiData = await res.json();
        showCategory("strings");
    }

    function showCategory(category) {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelector(`.tab[data-category="${category}"]`).classList.add("active");

        const grid = document.getElementById("grid");
        grid.innerHTML = "";

        apiData[category].forEach(item => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <h3>${item.name}</h3>
                <p><small>${item.origin}</small></p>
            `;
            div.onclick = () => openModal(item);
            grid.appendChild(div);
        });
    }

    function openModal(item) {
        const modal = document.getElementById("modal");
        modal.style.display = "flex";

        document.getElementById("modal-body").innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}">
            <p><strong>Origin:</strong> ${item.origin}</p>
            <p><strong>Importance:</strong> ${item.importance}</p>
            <p><strong>Genres:</strong> ${item.genres.join(", ")}</p>
            <p><strong>Price:</strong> ${item.priceRange}</p>
            <p><strong>Masters:</strong> ${item.masters.join(", ")}</p>
            <audio controls>
                <source src="${item.audioSample}" type="audio/mpeg">
                Your browser does not support audio playback.
            </audio>
        `;
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            showCategory(tab.dataset.category);
        });
    });

    loadData();
 