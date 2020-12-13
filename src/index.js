import './styles.css';
const { alert, error, notice, defaultModules } = require('@pnotify/core');
import '../node_modules/@pnotify/core/dist/PNotify.css'
import '../node_modules/@pnotify/core/dist/Angeler.css'
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import '../node_modules/@pnotify/core/dist/Material.css'
// import templete from './template.hbs';
// import debounce from 'lodash.debounce'
const nameUrl = "https://restcountries.eu/rest/v2/name/{name}";
const finder = document.querySelector(".finder");
const content = document.querySelector(".content");

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

finder.addEventListener("input", getData);



const myAlert = alert({
    title: 'Attention!!!!',
    text: "I'm an alert.",
    type: 'info'
});
console.log(myAlert);

const myError = error({
    title: 'Error',
    text: "I'm an error.",
    type: 'error'
});
console.log(myError);

const myNotice = notice({
    title: 'Notice',
    text: "I'm an notice.",
    type: 'error'
});
console.log(myNotice)