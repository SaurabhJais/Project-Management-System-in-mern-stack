const express = require("express")
const app = express()
const mongoose = require("mongoose")
const signUpItems = require("./routes/sign-up")
const loginItems = require("./routes/login")
const AddProject = require("./routes/add-project")

const DB_URI = "mongodb://localhost:27017/myDb"
mongoose.connect(DB_URI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}).then((res)=>{
    console.log("Database is connected ....")
}).catch((err)=>{ console.log(err) })


app.use("/sign-up", signUpItems)
app.use("/login", loginItems)
app.use("/add-project", AddProject)

app.listen(5000, ()=>{
    console.log("Server is running on port 5000 .....")
})