const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000


const users = [
    {
        name: "nut",
        age: 23
    },
    {  
        name: "keaw",
        age: 22
    }
]

app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res, next) => {
    console.log(path.join(__dirname, 'views', 'index.html'));
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get("/users", (req, res, next) => {
    res.json({
        users
    })
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})