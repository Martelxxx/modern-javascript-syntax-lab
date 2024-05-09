// Exercise 1. Use `.map()` to iterate over the array //

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const nums2 = nums.map(num => num * 2); // double each number in the array
console.log(nums2);

// ---------------------------------------------------------------

// Exercise 2. Use (array)destructuring to pull out first and second values //

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [first, second] = pizzaToppings;
console.log(first);
console.log(second);

// ---------------------------------------------------------------

// Exercise 3. Use (object) destructuring to create variables `make` that will hold respective values`//

const car = {
    make: 'Audi',
    model: 'q5',
  };

  const { make, model } = car;
    console.log(make);
    console.log(model);

// ---------------------------------------------------------------

// Exercise 4. Duplicate arrays using spread operator and assign it to `controversialPizzaToppings //

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings2];
console.log(controversialPizzaToppings);

// ---------------------------------------------------------------

// Exercise 5. Duplicate the following object and spread its values into a new variable `myCar` //

const car2 = {
    make: 'Audi',
    model: 'q5',
  };

  const myCar = { ...car2 };
  console.log(myCar);

// ---------------------------------------------------------------

// Exercise 6. Create an object "userProfile. Define variables propertyName as a string. Use as a dynamic key in userProfile, assigning relevant value to it //

const propertyName = 'email';
const userProfile = {
  name: 'Alex',
  age: 25,
  [propertyName]: 'alex@alex.com',
};
console.log(userProfile);

// ---------------------------------------------------------------

// Exercise 7. Import the default export and the named export `age` from the exportingFile.js file //
// "Done"
// ---------------------------------------------------------------

// Exercise 8. // Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
    describeAnimal();

// ---------------------------------------------------------------

//Exercise 9. Convert if...else statement to ternary operator //


let pizza = 'tasty'
let pizza2 = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(pizza2);

// ---------------------------------------------------------------

// Exercise 10. Simulated language configuration (change this variable to test) //

const localLangConfig = null;

// Create a variable called LANG. Assign LANG the value of localLangConfig or 'en' as a default
const LANG = 'en';

console.log('Language setting:', LANG);

// Simulated user theme preference (change this variable to test)
const userSavedTheme = null;

// Create a variable called USER_THEME. Assign THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = 'light';

console.log('User theme setting:', USER_THEME);

// ---------------------------------------------------------------

// Exercise 11. Check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
    };

let cat = adventurer.cat?.age;
console.log(cat);

// ---------------------------------------------------------------
  



