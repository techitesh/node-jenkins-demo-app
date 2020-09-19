const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => {
    return res.status(200).json({ success: true })
})

app.listen(3000, () => {
    console.log(`Server Running on PORT 3000`)
})