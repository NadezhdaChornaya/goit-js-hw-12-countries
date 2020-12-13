import './styles.css';
const { alert, error, notice, defaultModules } = require('@pnotify/core');
import '../node_modules/@pnotify/core/dist/PNotify.css'
import '../node_modules/@pnotify/core/dist/Angeler.css'
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import '../node_modules/@pnotify/core/dist/Material.css'
import debounce from 'lodash.debounce';
import cardCountry from "./template/cardCountry.hbs";
import listCountry from "./template/listCountry.hbs";

const finder = document.querySelector(".finder");
const content = document.querySelector(".content");
const baseUrl = 'https://restcountries.eu/rest/v2/name';
let foundedCountry = '';

const fetchCountries = (searchQuery) => {
    // console.log(e.target.value);
    fetch(`${baseUrl}/${searchQuery}`)
        .then((response) => { return response.json() })
        .then((data) => { console.log(data) })
};

function onSearch() {
    // resetSearch();
    foundedCountry = finder.value;
    fetchCountries(foundedCountry)
        .then(renderMarkup)
        .catch(err => console.log(err));
}

function renderMarkup(countries) {
    if (countries.length === 1) {
        // resetSearch();
        markupContries(cardCountry, countries);
    } else if (countries.length > 1 && countries.length <= 10) {
        // resetSearch();
        markupContries(listCountry, countries);
    } else if (countries.length > 10) {
        resultMessage(
            error,
            'To many matches found. Please enter a more specific query!',
        );
    } else {
        resultMessage(alert, 'No matches found!');
    }
}
function resetSearch() {
    content.innerHTML = '';
}

function onSearch() {
    resetSearch();
    foundedCountry = finder.value;
    countriesApi(foundedCountry)
        .then(renderMarkup)
        .catch(err => console.log(err));
}

function resultMessage(typeInfo, textInfo) {
    typeInfo({
        text: `${textInfo}`,
        delay: 1000,
        closerHover: true,
    });
}
function markupContries(tpl, countries) {
    content.insertAdjacentHTML('beforeend', tpl(countries));
}

finder.addEventListener("input", debounce(() => {
    onSearch();
}, 500),
);

// ==============================================
// const myAlert = alert({
//     title: 'Attention!!!!',
//     text: "No matches found!",
//     type: 'info'
// });
// console.log(myAlert);

// const myError = error({
//     title: 'Error',
//     text: "Too many matches found. Please enter a more specific query!",
//     type: 'error'
// });
// console.log(myError);

// const myNotice = notice({
//     title: 'Notice',
//     text: "Too many matches found. Please enter a more specific query!",
//     type: 'error'
// });
// console.log(myNotice)