const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const contactRoutes = require("./routes/contactRoutes")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/Manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err))

// Routes
app.use("/api/contacts", contactRoutes)


app.get("/", (req, res) => {
  res.send("Welcome to the Contact Management API");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// ...existing code...

// Default route for root URL


// Start server
