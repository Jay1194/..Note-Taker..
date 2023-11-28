const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// path to the db.json file
const dbPath = path.join(__dirname, '../../Develop/db/db.json')

// Read the content of the db.json file
const getNotesFromFile = () => {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
};

//write notes to the db.json file
const writeNotesToFile = (notes) => {
    fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf8')
};

//Route to handle Get request for retrieving all notes
router.get('/notes', (req, res) => {
    const notes = getNotesFromFile();
    res.json(notes);
});

// route to handle post request for adding a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    const notes = getNotesFromFile();

    //add the new note to the array
    notes.push(newNote);

    //Write the updates notes to array back to the file
    writeNotesToFile(notes);

    //RFEspond with the new notes
    res.json(newNote);
});

module.exports = router;