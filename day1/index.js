const express = require('express');

const app = express()
const port = 5000;


app.get('/', (req, res) => {
    res.send('Helle express js')
})

// Simple string respons
app.get('/stringRespons', (req,res) => {
    res.send("This is simple string response")
})
app.post('/stringRespons2', (req,res) => {
    res.send("This is simple string response")
})

// Status code respons
app.get('/stringRespons3', (req,res) => {
    res.status(401).end("Unathorize")
})


// Json Respons
app.get('/jsonresponse', (req,res) => {

    const myJsonFile=[
        {
            name:'Adnan',
            city:'Khulna',
            occupation:'Engr.'
        },
        {
            name:'Al Amin',
            city:'Khulna',
            occupation:'Programmer'
        },
        {
            name:'Rubel',
            city:'Khulna',
            occupation:'Bus'
        },
        {
            name:'Adnan',
            city:'Khulna',
            occupation:'Engr.'
        },
    ]
    res.json(myJsonFile)
})


// Download respons
// Status code respons
app.get('/downloadrespons', (req,res) => {
    res.download('/uploads/abc.png')
})






app.listen(port, () => {
    console.log("Surver run success")
})