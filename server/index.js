import express from "express";
import cors from "cors";
import Chance from "chance";

const app = express();
const chance = new Chance();
app.use(cors());

app.use(express.json());

const animals = [
  ...Array(250)
    .keys()
    .map((id) => {
      return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
      };
    }),
];

app.get("", (req, res) => {
  const q = req.query.q.toLowerCase() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );

  res.json(results);
});

app.listen(8080, () => {
  console.log(`The server is running on port 500`);
});
