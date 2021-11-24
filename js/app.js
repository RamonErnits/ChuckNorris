const getJokesBtn = document.querySelector('.getJokes');
const jokeslist = document.querySelector('.jokes');
const inputField = document.querySelector('input[type="number"]');

getJokesBtn.addEventListener('click', getJokes);

function getJokes(){
    console.log(inputField);
    let numberOfjokes = inputField.value;
    let url = `http://api.icndb.com/jokes/random/${numberOfjokes}`;

    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        let output = '';

        data.value.forEach(value => {
            console.log(value.joke);
            output += `<li>${value.joke}</li>`
        });

        jokeslist.innerHTML = output;
    });
}