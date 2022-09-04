//Select Elements
let searchResults = document.querySelector('.search-results'),
    inputSearch = document.querySelector('.input-search');

//Clear the content inside the search relust div
function clearResults() {
    searchResults.innerHTML = '';
}

// get the result of the search
function getResults() {
    const search = inputSearch.value;
    clearResults();
    if (search.length > 0) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].name.toLowerCase().includes(search.toLowerCase()) || database[i].desc.toLowerCase().includes(search.toLowerCase())) {
                searchResults.innerHTML += `
                <div class="box">
                    <div class="box-left">
                        <h2>${database[i].name}</h2>
                        <p>${database[i].desc}</p>
                    </div>
                    <div class="box-right">
                        <img src="${database[i].img}">
                    </div>
                </div>
                `;
            }
        }
    } else {
        PrintAll();
    }
}

//Print All Result in the database
function PrintAll() {
    for (let i = 0; i < database.length; i++) {
        searchResults.innerHTML += `
        <div class="box">
        <div class="box-left">
            <h2>${database[i].name}</h2>
            <p>${database[i].desc}</p>
        </div>
        <div class="box-right">
            <img src="${database[i].img}">
        </div>
    </div>
`;
    }
}

//Make An Event On the Search Input
inputSearch.addEventListener("keyup", getResults);
//Print All The Info
PrintAll();