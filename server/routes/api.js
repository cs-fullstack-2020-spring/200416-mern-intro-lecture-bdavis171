// api route

// reference express
const express = require('express');
const router = express.Router();
router.use(express.json());

// import schema
const MovieCollection = require('../models/MovieSchema');

// POST: create new movie
router.post('/',(req,res) => {
    res.send('new movie created worked');
})

// GET: read one movie by title
router.get('/:title', (req,res) => {
    res.send('get one movie by title worked');
})

// GET: read all movies
router.get('/', (req,res) => {
    res.send('get all movies worked');
})

// PUT: update one movie by title
router.put('/:title', (req,res) => {
    res.send('update one movie worked');
})

// DELETE: delete one movie by title
router.delete('/:title',(req,res) => {
    res.send('delete one movie by title worked');
})

// export
module.exports = router;