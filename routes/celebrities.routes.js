const celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/celebrities/create",(req, res, next) => {
    res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    if (name !== "" && occupation !== "" && catchPhrase !== "") {
      celebrity.create({ name, occupation, catchPhrase })
        .then((newCelebrity) => {
          res.render("celebrities/celebrities", { celebrity: newCelebrity });
        })
        .catch((err) => next(err));
    } else {
      res.redirect("/celebrities/create");
    }
  });

router.get("/celebrities", (req, res, next) => {
    celebrity.find()
    .then(celebrities => res.render("celebrities/celebrities", {celebrity:celebrities}))
})



module.exports = router;