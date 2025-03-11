const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());

// Serve update files from the "updates" directory
app.use("/updates", express.static(path.join(__dirname, "updates")));

// Health check
app.get("/", (req, res) => {
  res.send("Electron Update Server Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});