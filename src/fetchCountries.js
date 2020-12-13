const baseUrl = 'https://restcountries.eu/rest/v2/name';

export const fetchCountries = (searchQuery) => {
    return fetch(`${baseUrl}/${searchQuery}`)
        .then((response) => response.json())
};