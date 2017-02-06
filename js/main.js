var question1 = document.getElementById("answer1");

var avgPrice = 0;

var avgPricer = function (array)    {
    for (var i = 0; i < array.length; i++)  {
         avgPrice += array[i].price;
    }
    question1.innerHTML = "The average price is" + " " + "$" + (avgPrice / array.length).toFixed(2);
    console.log(question1);

};

avgPricer(items);

var question2 = document.getElementById("answer2");

var costFinder = function (array)   {
    var answer;
    for (var i = 0; i < array.length; i++)  {
        if (array[i].price <= 17.99 && array[i].price >= 14.01)   {
            answer = "<p>" + array[i].title + "</p>";
            question2.innerHTML += answer;
        }
    }
};

costFinder(items);

var question3 = document.getElementById("answer3");

var euroPrice = function (array)    {
    for (var i = 0; i < array.length; i++)  {
        if (array[i].currency_code === "GBP")   {
            question3.innerHTML += array[i].title + " " + "costs" + " " + "&pound" + array[i].price;
        }
    }
};

euroPrice(items);

var question4 = document.getElementById("answer4");

var woodenStuff = function (array)  {
    for (var i = 0; i < array.length; i++)  {
        for (var j = 0; j < array[i].materials.length; j++)  {
            if (array[i].materials[j] === "wood")    {
                question4.innerHTML += "<p>" + array[i].title + " " + "is made of wood." + "</p>";
            }
        }
    }
};

woodenStuff(items);

var question5 = document.getElementById("answer5");

var madeOfMucho = function (array)  {
    var muchoMade;
    for (var i = 0; i < array.length; i++)  {
        if (array[i].materials.length > 7)  {
            for (var j = 0; j < array[i].materials.length; j++) {
                muchoMade += "<p>" + array[i].materials[j] + "</p>";
            }
            question5.innerHTML += array[i].title + " " + "has" + " " + array[i].materials.length + " " + "materials:" + muchoMade;
            muchoMade = "";
        }
    }
};

madeOfMucho(items);

var question6 = document.getElementById("answer6");

var homeMade = function (array) {
    homeItems = [];
    for (var i = 0; i < array.length; i++)  {
        if (array[i].who_made === "i_did")  {
            homeItems.push(array[i]);
        }
    } question6.innerHTML = homeItems.length + " " + "were made by their sellers";
};

homeMade(items);
