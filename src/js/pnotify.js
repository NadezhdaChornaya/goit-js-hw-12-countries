import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

export const errorAlert = (text) => error({
    text: `${text}`,
    sticker: false,
    closer: false,
    delay: 2000,
})