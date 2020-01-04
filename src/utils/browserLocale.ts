const browserLocale =
    (navigator.languages && navigator.languages[0]) || navigator.language;
const browserLocaleWithoutRegionCode = browserLocale
    .toLowerCase()
    .split(/[_-]+/)[0];

export default browserLocaleWithoutRegionCode;
