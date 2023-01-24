const express = require('express')
const app = express()
const user_routes = require("./routes/users")

const users = [
    {
        id:1,
        name: 'AK'
    }
]

app.get('/',(req, res)=>{
    res.send("Hello there")
})

app.use("/api/users", user_routes)

app.listen(6022)