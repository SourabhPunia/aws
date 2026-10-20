const express = require('express');
const app = express();
const port = 3000;

let kidney = 0;
let heart = 0;

app.use(express.json());

console.log("DB connected successfully");

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.json({
        health: "100%"
    });
});

app.post('/appointment', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const problem = req.body.problem;

    if (!name || !age || !problem) {
        return res.status(400).send('Enter your details first');
    }

    res.json({
        message: "Your appointment is booked"
    });
});

app.get('/kidney', (req, res) => {
    if (kidney > 0) {
        kidney -= 1;
        res.json({
            message: "Kidney is assigned to patient"
        });
    } else {
        res.send('No kidney is available');
    }
});

app.get('/heart', (req, res) => {
    if (heart > 0) {
        heart -= 1;
        res.json({
            message: "Heart is assigned to patient"
        });
    } else {
        res.send('No heart is available');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});