/*- Exercise 1
    
    It's time to create your own object literal.  Please define a new variable called `product`.  It should be an object literal with the following properties:
    
    - `name` - set to the string `"Gummy Bears"`
    - `inStock` - set to the boolean `true`
    - `price` - set to the number `1.99`
    - `flavors` - set to an array of at least three strings like `["grape", "apple", "cherry"]` */

const product = {name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
};

console.log(product);

/*- Exercise 2
This `restaurant` object that contains a name, address, city, state, and zipcode.

```jsx
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
```

- **Your task to is to create a variable named `fullAddress` that points to a string** using the information from `restaurant`.
- `fullAddress` should point to a string that includes the address, city, state, and zipcode from the restaurant object. Make sure to add any necessary commas or spaces between the values as seen in the exact expected output format shown below.
- Console log fullAddress. It should look something like this: `"64 Johnson Ave, Brooklyn, NY 11206"` */

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206'
}

const fullAddress = restaurant['address'] + ', ' +restaurant['city'] + ', ' + restaurant['state'] +' '+ restaurant['zipcode'];
console.log(fullAddress);

/*- Exercise 3
    
    It's time to write your first function!
    
    - Define a function called `printExclamation` that prints out the string `"!!"`
    - **Execute your function once** */

function printExclamation(){
    console.log('!!');
}

printExclamation();

/*- Exercise 4
    
    Define a function called `rant` which accepts a string argument called `message`.  **The function should print out an uppercased version of `message` 3 times** (with 3 separate calls to console.log).  For example, `rant("I hate beets")` should print out:
    
    `1. I HATE BEETS
    2. I HATE BEETS
    3. I HATE BEETS` */

    function rant(message){
        const uppercase = message.toUpperCase();
        console.log(uppercase);
        console.log(uppercase);
        console.log(uppercase);
        return uppercase;
    }

rant('I hate beets');

/*- Exercise 5
    
    In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called `isSnakeEyes`, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"
    
    `1. isSnakeEyes(1,1) //Snake Eyes!
    2. isSnakeEyes(1,5) //Not Snake Eyes!
    3. isSnakeEyes(4,5) //Not Snake Eyes!` */

function isSnakeEyes(numOne, numTwo){
    if (numOne === numTwo){
        console.log('Snakes Eyes!');
    } else{
        console.log('Not Snake Eyes!');
    }
}

isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);

/*- Exercise 6
    
    Write a simple function `multiply` which accepts two numerical arguments and returns their product (multiply them together).  **Make sure to return the value instead of printing it!**
    
    `1. multiply(2,3) // 6
    2. multiply(9,9) // 81
    3. multiply(5,4) // 20` */

function multiply(numOne, numTwo){
    const product = numOne * numTwo;
    console.log(product);
    return product;
}

multiply(2,3);
multiply(9,9);
multiply(5,4);

/*- Exercise 7
    
    Write a function called `isShortsWeather`.
    
    - It should accept a single number argument, which we will call `temperature`(but you can name it whatever you want, of course).
    - If `temperature` is **greater than or equal to 25**, return `true`.
    - Otherwise, return `false`.
    
    `1. isShortsWeather(30) //true
    2. isShortsWeather(15) //false
    3. isShortsWeather(25) //true` */

function isShortsWeather(temperature){
    const result = temperature >= 25;
    console.log(result);
    return result;
}

isShortsWeather(30);
isShortsWeather(15);
isShortsWeather(25);

/*- Exercise 8
    
    Please write a function called `lastElement` which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
    
    `1. lastElement([3,5,7]) //7
    2. lastElement([1]) //1
    3. lastElement([]) //null` */

function lastElement(arr){
    if (arr.length === 0){
        console.log(null);
        return null;
    }
    const last = arr[arr.length - 1];
    console.log(last);
    return last;
}

lastElement([3,5,7]);
lastElement([1]);
lastElement([]);

/*- Exercise 9
    
    Define a function called **`capitalize`** that accepts a string argument and 
    **returns a new string with the first letter capitalized** (but the rest of the 
    string unchanged).  
    
    For example:
    
    `1. capitalize('eggplant') // "Eggplant"
    2. capitalize('pamplemousse') // "Pamplemousse"
    3. capitalize('squid') //"Squid"` */

    function capitalize(word){
        if (word === 0){
            console.log('');
        }
        const result = word.charAt(0).toUpperCase() + word.slice(1);
        console.log(result);
        return result;
    }

    capitalize('eggplant');
    capitalize('pamplemousse');
    capitalize('squid');

/*- Exercise 10
    Write a function called returnDay. This function takes in one parameter (a number from 1-7) 
    and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  
    If the number is less than 1 or greater than 7, the function should return null.

    1. returnDay(1) // "Monday"
    2. returnDay(7) // "Sunday"
    3. returnDay(4) // "Thursday"
    4. returnDay(0) // null */

function returnDayArray (number){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (number >= 1 && number <= 7){
        console.log(days[number - 1]);
        return days[number - 1];
    }
    console.log(null);
    return null;
}

function returnDayFunction (number){
    if (number >= 1 && number <= 7){
        const days = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
     }
        console.log(days[number]);
        return days[number];
    }
    console.log(null);
    return null;
}

returnDayArray(0);
returnDayArray(1);
returnDayArray(2);
returnDayArray(3);
returnDayArray(4);
returnDayArray(5);
returnDayArray(6);
returnDayArray(7);
returnDayArray(8);

returnDayFunction(0);
returnDayFunction(1);
returnDayFunction(2);
returnDayFunction(3);
returnDayFunction(4);
returnDayFunction(5);
returnDayFunction(6);
returnDayFunction(7);