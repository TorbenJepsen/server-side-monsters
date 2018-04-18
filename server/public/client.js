console.log('JS is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
        .then(function (response) {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                $('#monsterList').append('<ul><li>' + response[i] + '</li></ul>');
            }
        });
};