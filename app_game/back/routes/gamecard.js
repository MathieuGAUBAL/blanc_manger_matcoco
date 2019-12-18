const express = require('express');
const router = express.Router();
const connection = require("./conf");

// On récupère ici la table gamecard.

router.get('/', (req, res) => {
    connection.query('SELECT * FROM gamecard',
    (err, results) => {
        if (err) {
            console.log('Issue');
        } else {
            console.log('Ok');
            res.json(results);
        }
    });
});

// On récupère ici le texte d'une carte JEU.

router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM gamecard WHERE id=?',
    [req.params.id],
    (error, results, fields) => {
        if (error) {
            res.json(error);
        } 
        else if (results.length === 0) {
            res.status(404).json('Invalid id')
        }
        else {
            res.json(results[0]);
        }
    });
});

module.exports = router;