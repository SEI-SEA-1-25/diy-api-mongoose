//Requirements//
const router = require("express").Router();
const Character = require("../models/Character");

//CREATE//
router.post("/", async (req, res) => {
  try {
    const newCharacter = await Character.create({
      name: req.body.name,
      species: req.body.species,
      weakness: req.body.weakness,
      actor: req.body.actor,
    });
    res.json(newCharacter);
  } catch (error) {
    console.log("👻 👻 👻", error);
  }
});

//INDEX(read all)//
router.get("/", async (req, res) => {
  try {
    const allCharacters = await Characters.find({});
    res.json(allCharacters);
  } catch (error) {
    console.log("👻 👻 👻", error);
  }
});

//SHOW(read one)//
router.get("/:id", async (req, res) => {
  try {
    const foundCharacter = await Character.findById(req.params.id);

    if (foundCharacter) {
      res.json(foundCharacter);
      console.log(`You have found: ${foundCharacter}`);
    }
  } catch (error) {
    console.log("👻 👻 👻", error);
    res.json({
      msg: "🧛‍♀️  Oh no! No character found.",
    });
  }
});

//UPDATE//
router.put("/:id", async (req, res) => {
  try {
    const updateCharacter = await Character.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      species: req.body.species,
      weakness: req.body.weakness,
      actor: req.body.actor,
    });
    res.json(updateCharacter);
  } catch (error) {
    console.log("👻 👻 👻", error);
  }
});

//DELETE//
router.delete("/:id", async (req, res) => {
  try {
    const deleteCharacter = await Character.findByIdAndDelete(req.params.id);
    res.json(deleteCharacter);
  } catch (error) {
    console.log("👻 👻 👻", error);
  }
});

//Export//
module.exports = router;
