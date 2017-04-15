var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");

var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");
console.log("");
console.log("Basic front: " + firstPresident.front);
console.log("Basic back: " + firstPresident.back);
console.log("");

var anotherQuestion = ClozeCard("Why is coding so fun?", "fun");
console.log("Cloze fullText: " + anotherQuestion.fullText);
console.log("Cloze cloze: " + anotherQuestion.cloze);
console.log("Cloze partial: " + anotherQuestion.partial);
console.log("");