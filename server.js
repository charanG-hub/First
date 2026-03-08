const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let account = {
  username: "admin",
  password: "1234",
  balance: 1000
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === account.username && password === account.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get("/balance", (req, res) => {
  res.json({ balance: account.balance });
});

app.post("/deposit", (req, res) => {
  const amount = parseInt(req.body.amount);
  account.balance += amount;
  res.json({ balance: account.balance });
});

app.post("/withdraw", (req, res) => {
  const amount = parseInt(req.body.amount);

  if (amount > account.balance) {
    return res.json({ error: "Insufficient balance" });
  }

  account.balance -= amount;
  res.json({ balance: account.balance });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
