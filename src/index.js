import './styles.css';
import { refs } from "./data/data"
import { onSearchCountry } from './js/getCountries'
import debounce from 'lodash.debounce';


refs.finderRef.addEventListener('input', debounce(onSearchCountry, 500));

