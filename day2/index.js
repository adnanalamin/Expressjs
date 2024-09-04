const express = require('express');
const app = express();
const port = 5000;

// Download response
app.get('/dwonloadResponse', (req, res) => {
    res.download('./uploads/abc.jpg');
})

// Redirect response
app.get('/bangladesh', (req, res) => {
    res.send("I Love Bangladesh")
})

app.get('/india', (req, res) => {
    res.redirect('http://localhost:5000/bangladesh')
})
app.get('/india', (req, res) => {
    res.redirect('http://localhost:5000/bangladesh')
})
app.get('/india', (req, res) => {
    res.redirect('http://localhost:5000/bangladesh')
})


app.listen(port, () => {
    console.log("Server is running");
})