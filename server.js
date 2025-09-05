const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Express! 🚀" });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on ${port}`);
});
