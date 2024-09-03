const express = require('express');
const app = express();
const port = 5000;

app.get('/dwonloadResponse', (req, res) => {
    res.download('./uploads/abc.jpg');
})

app.listen(port, () => {
    console.log("Server is running");
})