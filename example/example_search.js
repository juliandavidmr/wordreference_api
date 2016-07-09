var wordreference = require('../index');

wordreference.synonym("jugar", "es").then((value) => {
  console.log(">", JSON.stringify(value));
}, (err) => {
  console.log("ERROR: ", err);
})
