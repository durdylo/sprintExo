document.getElementById('redButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

document.getElementById('greenButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
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