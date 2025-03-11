const express = require("express")
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", async(req, res) => {
    res.send("Hello welcome to my chat app");
})

app.post("/authenticate", async(req, res) => {
    const { username } = req.body;

    return res.status(200).json({ username: username, secret: "sha256..." });
})


app.listen(3000, () => {
    console.log(`app running on http://localhost:${3000}`)
})