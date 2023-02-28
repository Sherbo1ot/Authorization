require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
const port = process.env.PORT || 5088;
const fs = require("fs");

const admin = require("firebase-admin");
const credentials = require("./key.json");

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

app.post("/registration", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.username;
    const userData = {
      username: req.body.username,
      password: req.body.password
    };

    const response = await db.collection("users").add(userData);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => console.log(`Server running on PORT: ${port}`));
