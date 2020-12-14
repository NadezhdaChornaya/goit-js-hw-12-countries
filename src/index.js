import './styles.css';
import { refs } from "./data/data"
import { fetchCountries } from "./fetchCountries";

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

import debounce from 'lodash.debounce';

import cardCountry from "./template/cardCountry.hbs";
import listCountry from "./template/listCountry.hbs";


const errorAlert = (text) => error({
    text: `${text}`,
    sticker: false,
    closer: false,
    delay: 2000,
})

const getMarkup = (countries) => {
    if (countries.length > 10) errorAlert("Too many matches found. Please enter a more specific query!").open()
    else if (countries.length > 1 && countries.length <= 10) refs.contentRef.innerHTML = listCountry(countries)
    else if (countries.length === 1) refs.contentRef.innerHTML = cardCountry(countries)
    else if (countries.status === 404) errorAlert("Country with this name wasn't found. Please enter a more specific query!").open()

}

const onSearchCountry = () => {
    refs.contentRef.innerHTML = '';
    if (refs.finderRef.value.length) {
        fetchCountries(refs.finderRef.value)
            .then(data => getMarkup(data));
    }
};

refs.finderRef.addEventListener('input', debounce(onSearchCountry, 500));

