const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author: 'Dimple Grover',
        text: 'Everything is awesome'
    },
    {
        author: 'Bishakha Bezboruah',
        text: 'She is awesome'
    },
    {
        author: 'Komal Grover',
        text: 'She is cool'
    }

]


async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log('DB seeded')
}

module.exports = seedDB;
