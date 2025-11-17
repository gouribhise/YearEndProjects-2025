 
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
 