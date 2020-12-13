const getData = (e) => {
    console.log(e.target.value);
    fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
        .then((response) => { return response.json() })
        .then((data) => {
            content.innerHTML = `<ul>${data.reduce((acc, item) => {
                acc += createMarkup(item);
                return acc;
            }, ""
            )}</ul>`
        }

        );
};


const createMarkup = (country) => {
    `<li>
    <h2>${country.name}</h2>
    </li>
    `
}

// fetchCountries(searchQuery)