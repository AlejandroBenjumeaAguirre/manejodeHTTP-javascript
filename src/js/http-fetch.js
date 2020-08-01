
const jokerUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokerUrl).then(resp => {
//     resp.json().then(data => {
//         console.log(data);
//     })
// });


fetch(jokerUrl).then( resp => resp.json()).then(console.log);