const express = require("express")
const PORT = process.env.PORT || 3001
const cors = require("cors")
const bodyParser = require("body-parser")

const speakerRouter = require('./routes/speakerRouter')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/speakers', speakerRouter)

app.listen(PORT, () => {
  console.log(`ok on ${PORT}`)
})

//import router from speaker router and quote router





