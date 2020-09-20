const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.status(200).json({ success: true, message: "Hello world" })
})

app.listen(3000, () => {
    console.log(`Server Running on PORT 3000`)
})