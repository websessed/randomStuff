
// remove duplicates
const unique = arr => [...new Set(arr)];

// flatten a 2d array
const flattened = arr => arr.flat();

// reverse a string
const rev = s => s.split('').reverse().join('');

// generate a range 1–9
const range9 = () => Array.from({ length: 9 }, (_, i) => i + 1);

// count occurrences in an array
const freq = arr => arr.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});

// shuffle an array
const shuffle = a => a.sort(() => Math.random() - 0.5);

// swap two variables
const swap = (a, b) => ([a, b] = [b, a]);

// remove falsy values from an array
const compact = arr => arr.filter(Boolean);

// capitalize first letter
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

// title case a string
const title = s => s.replace(/\b\w/g, c => c.toUpperCase());

// get random integer in range
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// get random hex color
const randColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

// check if even
const isEven = n => n % 2 === 0;

// truncate decimal to d places
const round = (n, d) => Number(Math.round(n + 'e' + d) + 'e-' + d);

// check if date is weekend
const isWeekend = d => [0, 6].includes(d.getDay());

// difference between two dates in days
const diffDays = (a, b) => Math.ceil(Math.abs(a - b) / (1000 * 60 * 60 * 24));

// check if object is empty
const isEmpty = o => Object.keys(o).length === 0;

// clone an object
const copy = obj => ({ ...obj });

// convert object to query string
const qs = o => new URLSearchParams(o).toString();

// get current timestamp
const now = () => Date.now();

// reverse boolean randomly (50/50)
const flipCoin = () => Math.random() >= 0.5;

// get random element from array
const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

// check if two arrays are equal (shallow)
const areArraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// get day of year (1–366)
const dayInYear = d =>
  Math.floor((d - new Date(d.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

// calculate interval between two dates in days
const dayDiff = (d1, d2) =>
  Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000);

// check if value is non-array object
const isObject = v => v && typeof v === 'object' && !Array.isArray(v);

// check if value is a valid JSON string
const isValidJSON = s => { try { JSON.parse(s); return true } catch(e){return false} };

// convert RGB to hex color
const rgbToHex = (r, g, b) =>
  `#${((1 << 24)|(r << 16)|(g << 8)|b).toString(16).slice(1)}`;

// factorial (recursive)
const fact = n => n <= 1 ? 1 : n * fact(n - 1);

// sum array of numbers
const sum = arr => arr.reduce((a, b) => a + b, 0);

// range from a to b inclusive
const range = (a, b) => [...Array(b - a + 1)].map((_, i) => a + i);

// slugify a string
const slug = s => s.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '');

// camelCase a string
const camel = s => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());

// reverse a boolean
const not = b => !b;

// check if string is palindrome
const isPalindrome = s => s === s.split('').reverse().join('');

// get byte size of string
const byteSize = s => new Blob([s]).size;

// remove non-digit characters
const justDigits = s => s.replace(/\D/g, '');

// clamp a number between min and max
const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

// generate UUID v4 (simplified)
const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (c === 'x' ? (Math.random()*16|0) : (Math.random()*4|8)).toString(16));

// wait for a set duration using promises
const wait = ms => new Promise(res => setTimeout(res, ms));  



/* >1 liners lol */

// debounce function calls
const debounce = (fn, ms) => {
  let t;
  return (...args) => (clearTimeout(t), (t = setTimeout(() => fn(...args), ms)));
};

// throttle function calls
const throttle = (fn, ms) => {
  let last = 0;
  return (...args) =>
    (Date.now() - last > ms) && ((last = Date.now()), fn(...args));
};

// deep freeze an object
const deepFreeze = obj =>
  Object.freeze(
    Object.keys(obj).reduce(
      (o, k) =>
        typeof obj[k] === 'object' && obj[k] !== null
          ? ((o[k] = deepFreeze(obj[k])), o)
          : ((o[k] = obj[k]), o),
      Array.isArray(obj) ? [] : {}
    )
  );

// pick a random key from an object
const randomKey = o =>
  Object.keys(o)[Math.floor(Math.random() * Object.keys(o).length)];

