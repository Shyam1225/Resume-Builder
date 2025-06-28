import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express();
const PORT = 4000;

app.use(cors());

//connect DB

//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
})