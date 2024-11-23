const express = require("express")
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes/authroutes")
const cors = require("cors")
dotenv.config();
const PORT = process.env.PORT || 5000;
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");

connectDb()
app.use(cors({
            origin: "http://localhost:5173",
            credentials: true
}))

app.use(express.json())

readdirSync("./routes").map((route) => app.use("/api", require(`./routes/${route}`)))



app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
})