const express = require('express')
const app = express()
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

app.get("/", (req, res, next) => {
    res.send('test heroku')
})

app.get("/users", (req, res, next) => {
    res.json({
        users
    })
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})