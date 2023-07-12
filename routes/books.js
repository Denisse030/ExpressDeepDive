const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("GET request to /books");
});

router.post("/", function (req, res, next) {
  res.send("POST request to /books");
});

router.get("/", function (req, res, next) {
    res.send("GET request to /books");
  });

router.get("/:id", (req, res) => {
    res.send(`GET Book with id ${req.params.id}`);
  });

router.put("/:bookId", function (req, res, next) {
  res.send(`PUT request to /books/${req.params.bookId}`);
});

router.delete("/:bookId", function (req, res, next) {
  res.send(`DELETE request to /books/${req.params.bookId}`);
});

module.exports = router;