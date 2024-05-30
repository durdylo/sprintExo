document.getElementById('redButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

document.getElementById('greenButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

document.getElementById('confirmButton').addEventListener('click', function() {
    alert('Action confirmée');
});
document.getElementById('blueTextButton').addEventListener('click', function() {
    document.body.style.color = 'blue';
});

document.getElementById('blackTextButton').addEventListener('click', function() {
    document.body.style.color = 'black';
});

document.getElementById('confirmButton').addEventListener('click', function() {
    alert('Action confirmée');
});

function changerPolice() {
    document.body.style.fontFamily = 'Arial';
}

function retablirPolice() {
    document.body.style.fontFamily = 'Times new Roman';
}