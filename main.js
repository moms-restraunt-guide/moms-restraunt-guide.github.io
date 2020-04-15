// main.js

const date = new Date();
const dateDayId = date.getDay();
const shuffle = function(array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};

const restrauntData = [{
        "name": "Wendy's",
        "location": "Benton",
        "deal": "$4 for 4",
        "dow": "Everyday",
        "dow_id": 8
    },
    {
        "name": "Red Robin",
        "location": "Benton",
        "deal": "$0.99 Kid's meal",
        "dow": "Tuesday",
        "dow_id": 2
    },
    {
        "name": "Newk's",
        "location": "Bryant",
        "deal": "$1.99 Kid's meal w/ purchase of adult meal",
        "dow": "Everyday",
        "dow_id": 8
    },
    {
        "name": "Dickies",
        "location": "Bryant",
        "deal": "Free Kid's meal w/ purchase of adult meal",
        "dow": "Sunday",
        "dow_id": 0
    },
    {
        "name": "Moe's",
        "location": "Bryant",
        "deal": "Free Kid's meal w/ purchase of adult meal",
        "dow": "Sunday",
        "dow_id": 0
    },
    {
        "name": "McAllister's Deli",
        "location": "Bryant",
        "deal": "Free Kid's meal w/ purchase of adult meal",
        "dow": "Monday",
        "dow_id": 1
    },
    {
        "name": "Taco Bueno",
        "location": "Bryant",
        "deal": "$2.99 Taco Platter",
        "dow": "Tuesday",
        "dow_id": 2
    },
    {
        "name": "Firehouse Subs",
        "location": "Bryant",
        "deal": "Free Kid's meal w/ purchase of adult meal",
        "dow": "Wednesday",
        "dow_id": 3
    },
    {
        "name": "Woodfire Grill",
        "location": "Bryant",
        "deal": "1/2 price kid's meal after 4:00p",
        "dow": "Wednesday",
        "dow_id": 3
    },
    {
        "name": "Taco Bueno",
        "location": "Bryant",
        "deal": "$0.59 party tacos",
        "dow": "Thursday",
        "dow_id": 4
    },
    {
        "name": "Arby's",
        "location": "Bryant",
        "deal": "Happy Hour from 2:00p to 5:00p",
        "dow": "Everyday",
        "dow_id": 8
    },
    {
        "name": "Burger King",
        "location": " All",
        "deal": " $1 8pc Chicken Nuggets",
        "dow": " Everyday",
        "dow_id": 8
    },
    {
        "name": "Burger King",
        "location": " All",
        "deal": " 5 for $4",
        "dow": " Everyday",
        "dow_id": 8
    },
    {
        "name": "McDonald's",
        "location": " Bryant",
        "deal": " 4 for $4",
        "dow": " Everyday",
        "dow_id": 8
    },
]

const table = new Vue({
    el: '#table',
    data: {
        restrauntData
    },
    computed: {
        dealList() {
            return shuffle(this.restrauntData.filter(item => item.dow_id === dateDayId || item.dow_id === 8));
        },
        today() {
            return Date();
        }
    }
})
