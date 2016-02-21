const getUrl = (str) => `http://katas.tddbin.com/katas/es6/language/__${str}__.json`;
export const KATAS_URL = getUrl('grouped');
export const INVALID_URL = getUrl('all');
export const WRONG_URL = 'no-url';
export const NON_EXISTENT_URL = 'http://wrong.url.test/katas.json';
