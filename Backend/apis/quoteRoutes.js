// const express = require('express').Router();
const express = require('express');
const Quotes = require('../models/Quote');
const router = express.Router();



router.get('/allQuotes', async (req, res) => {
    try {
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes)
    }
    catch (e) {
        res.status(400).json({ msg: 'something went wrong' })
    }

})

router.post('/addQuotes', async (req, res) => {
    try {
        let { author, text } = req.body;
        await Quotes.create({ author, text });
        res.status(200).json({ msg: 'new quote added successfully' })
    }
    catch (e) {
        res.status(400).json({ msg: 'something went wrong' })
    }
})

router.get('/quotes/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let foundQuote = await Quotes.findById(id);
        res.status(200).json(foundQuote)
    }
    catch (e) {
        res.status(400).json({ msg: 'something went wrong' })
    }

})

module.exports = router;