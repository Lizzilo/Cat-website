(function () {
    'use strict';

    const url = 'https://meowfacts.herokuapp.com/';
    const catFact = document.getElementById("cat-fact");
    const revealButton = document.getElementById("reveal-btn");

    function addDataToWebsite(data) {
        let fact = Object.values(data);
        catFact.innerHTML = fact;
    }

    function getData () {
        fetch(`${url}`)
        .then(response => response.json())
        .then(function (json) {
            addDataToWebsite(json);
        });
    }

    revealButton.addEventListener('click', getData);


}) ();