import express from "express";
import path from "path";

const app = express();
const port = 3000;

// add a possibility to use files from the "public" directory
app.use(express.static('public'));

// render the index.html file by the "/" route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// return a list of articles from the db.json
app.get('/items/', (req, res) => {

});

app.listen(port, () => {
    console.log(`Test project is here: http://localhost:${port}`);
});