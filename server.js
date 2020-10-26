const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.get("/", (req, res, next) => {
    res.send('test heroku')
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})