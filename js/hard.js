//use includes and a higher order function (filter) for wooden items

question1 = document.getElementById("answer1");

var avgPrice = [];
function forEacher(object)  {avgPrice.push(object.price)}
function reducer(a, b)  { return a + b; };

items.forEach(forEacher);
avgPrice = avgPrice.reduce(reducer);
question1.innerHTML = "The average price is" + " " + "$" + (avgPrice / items.length).toFixed(2);


question2 = document.getElementById("answer2");

function filtered(obj) {return obj.price <18 && obj.price > 14};
function forEacher2(obj) {return question2.innerHTML += "<p>" + obj.title + "</p>"};

items.filter(filtered).forEach(forEacher2);

question3 = document.getElementById("answer3");

items.forEach(function(object)  {
   if (object.currency_code === "GBP")  {
       question3.innerHTML += object.title + " " + "costs" + " " + "&pound" + object.price;
   }
});

question4 = document.getElementById("answer4");

items.forEach(function(object)  {
    if (object.materials.includes("wood"))   {
        question4.innerHTML += "<p>" + object.title + " " + "is made of wood." + "</p>";
    }
});

question5 = document.getElementById("answer5");

items.forEach(function(object)  {
    var muchoMade;
    if (object.materials.length > 7)    {
        for (var j = 0; j < object.materials.length; j++) {
            muchoMade += "<p>" + object.materials[j] + "</p>";
        }
        question5.innerHTML += object.title + " " + "has" + " " + object.materials.length + " " + "materials:" + muchoMade;
        muchoMade = "";
    }
});

question6 = document.getElementById("answer6");

var homeItems = [];

items.forEach(function(object)  {
    if (object.who_made === "i_did")    {
        homeItems.push(object);
    }
    question6.innerHTML = homeItems.length + " " + "were made by their sellers";
});
