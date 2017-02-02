//use includes and a higher order function (filter) for wooden items

question1 = document.getElementById("answer1");

var avgPrice = [];

items.forEach(function (object) {
    avgPrice.push(object.price);
});

avgPrice = avgPrice.reduce(function (a, b) { return a + b; });
question1.innerHTML = "The average price is" + " " + "$" + (avgPrice / items.length).toFixed(2);


question2 = document.getElementById("answer2");

items.forEach(function(object) {
    if (object.price < 18 && object.price > 14) {
        question2.innerHTML += "<p>" + object.title + "</p>";
    }
});

question3 = document.getElementById("answer3");

items.forEach(function(object)  {
   if (object.currency_code === "GBP")  {
       question3.innerHTML += object.title + " " + "costs" + " " + "&pound" + object.price;
   }
});

question4 = document.getElementById("answer4");

items.forEach(function(object)  {
    if (object.materials.includes("wood"))   {
        question4.innerHTML += "<p>" + object.title + " " + "is made of wood." + "</p>"
    }
});

question5 = document.getElementById("answer5");

