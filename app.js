function randomize() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    let drawn = [];
    let numbers;

    for (let i = 0; i < quantity; i++) {
        numbers = randomNumber(from, to);

        while (drawn.includes(numbers)) {
            numbers = randomNumber(from, to);
        }

        drawn.push(numbers);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="text__paragraph">Randomized numbers: ${drawn}</label>;`;

    alterButtonStatus();

    if (from >= to) {
        alert('The number inserted in "From number" must be smaller than the number inserted in "To number".');
        reset();
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterButtonStatus() {
    let btnRestart = document.getElementById('btn-reset');
    let btnRandomize = document.getElementById('btn-randomize');
    if (btnRestart.classList.contains('container__button-disabled')) {
        btnRestart.classList.remove('container__button-disabled');
        btnRestart.classList.add('container__button');
        btnRandomize.classList.remove('container__button');
        btnRandomize.classList.add('container__button-disabled');
    } else {
        btnRestart.classList.remove('container__button');
        btnRestart.classList.add('container__button-disabled');
        btnRandomize.classList.remove('container__button-disabled');
        btnRandomize.classList.add('container__button');
    }
}

function reset() {
    document.getElementById('quantity').value = '';
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('result').innerHTML = '<label class="text__paragraph">Randomized numbers: none so far</label>';
    alterButtonStatus();
}
