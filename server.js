// Import the Express module
import express from "express";

// Create a new Express application instance
const app = express();

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
//requisição e resposta
app.get("/api", (req, res) => {
    res.status(200).send("Hello World!");
    
})