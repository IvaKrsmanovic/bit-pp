// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: 'turkish',
    strength: 'strong',
    flavour: 'bitter',
    milk: 'none',
    sugar: 'none'
}

console.log(coffee.flavour);

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

const movie = {
    title: 'Harry Potter and the Goblet of Fire',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
    director: 'Mike Newell',
    genre: 'fantasy',
    popularity: 'global'
}

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject(decription, language, gitRepo, dev) {
    return {
        decription,
        language,
        gitRepo,
        dev,
        repository: function () {
            console.log(`The git repository is ${gitRepo}`)
        },
        whichLang: function () {
            if (language == 'JavaScript') {
                console.log('The project is written in JS')
            } else { console.log(`The project is written in ${language}`) }
        },
        inDevelopment: function () {
            if (dev == true) {
                console.log('The project is in development')
            } else { console.log('The project is not in development') }
        }
    }
}

let project = createProject('website', 'JavaScript', 'Alke93', true);

project.repository();
project.whichLang();
project.inDevelopment();

let projectNew = createProject('DFA', 'R', 'ivakrsmanovic', false);

console.log(projectNew.decription);
projectNew.repository();
projectNew.whichLang();
projectNew.inDevelopment();

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function createRecipe(name, type, complexity, ingredients, time, instruction) {
    var recipe = {
        name,
        type,
        complexity,
        ingredients,
        time,
        instruction,
        printIngredients: function () {
            console.log(`The needed ingredients are ${ingredients}`)
        },
        duration: function (dur) {
            console.log(parseInt(time));
            if (parseInt(time) <= dur) {
                console.log(`The meal can be prepered in under ${dur} minutes`);
            } else { console.log(`The meal takes ${time}`); }
        },
        makeFrench: function (cuisine) {
            recipe.type = cuisine;
        },
        deleteIngredient: function (ingredient) {
            recipe.ingredients = recipe.ingredients.filter(function (item) {
                return item != ingredient;
            });
        }
    }

    return recipe;
}

var peachCobbler = createRecipe('Peach Cobbler', 'Dessert', '1',
    ['flour', 'milk', 'sugar', 'butter', 'canned peaches', 'cinnamon', 'icecream'], '30 minutes',
    'Mix all ingredients and bake at 180C for 30 mins');

peachCobbler.makeFrench('french');
peachCobbler.duration(40);
console.log(peachCobbler.type);
peachCobbler.deleteIngredient('flour');
console.log(peachCobbler.ingredients);