/* Tyler Walsh
walsh_ao7b.js
19WI_INFO_2124_WW
Thoendel
1/30/2019 */

/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList(badFoods, "bread", "beer", "bacon", "butter", "beans"); //Invoking the buildFoodsList function to add these 5 items to the bad foods array 

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    if(text == "q" || text == "Q") { //If the user inputs a q in order to close the program
        clearScreen(); //Clear the screen
        console.log("Bye."); //Tell the user that their action was registered.
        process.exit(); //Exit the process.

    } else if (text == "v" || text == "V") {

        clearScreen(); //clear the screen

        displayList(groceryItems); //Show the user what is in their grocery list.

        console.log(getPrompt(groceryItems)); //Then prompt the user to continue.

    } else { //If the user did not try to exit the program.

        clearScreen(); //clear the screen

        if (checkItem(text, badFoods) == false) { //Compare the user's input to the list of bad foods. If the input is not a bad food do this.
        //Note: Putting spaces before a "bad food" still causes it to be added to the list. This could be fixed by moving the formatItem function to before the if statement, however I chose to follow the instructions closely.

            formatItem(text); //Format the user's input properly.
            groceryItems.unshift(text); //Add the user's input to the grocery items array.
            console.log("Item added to list!"); //Tell the user the action was successful.

           console.log(getPrompt(groceryItems)); //Then prompt the user to continue.

        } else { //If the user input a bad food

            console.log(`Error. This food is not safe for your allergies.
            It has not been added to your list.
            `); //Tell the user that the item could not be added.

            console.log(getPrompt(groceryItems)); //Then prompt the user to continue.
        }

    }
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
function buildFoodsList(badFoods, ...foods) { //Accepts two parameters: The badfoods array, and any number of foods.
    
    if(foods.length > 0) { //If the user actually input any foods, add them to the array

        for(number of foods) { //A for loop that goes through once for each item passed
            badFoods.unshift(number); //Each item passed is added to the front of the badfoods array
        }
    } else { //If the user didn't tell us what foods to put in the array
        console.log("You forgot to tell us what foods to add!"); //Tell the user that nothing changed.
    }
    return badFoods; //Returns the array, which has been updated.
}

function getPrompt(groceryItems) { //This function contains a prompt for the user.

    return `
    Your grocery list contains ${groceryItems.length} items.
    Please enter a grocery item.
    Press Q to quit.
    Press V to view the list.
    ===========================`; //Returns a template literal that tells the user how to continue with the program.

}

function displayList(groceryItems) { //A function to let the user check what is in their grocery list.
    console.log(`
    Grocery List
    (${groceryItems.length} items)
    ======================`); //Displays how many items are in the grocery list.

    for(let i = 0; i < groceryItems.length; i++) { //A for loop to display what items are in the list.

         console.log("Item " + [i + 1] + ": " + groceryItems[i]); //Output the data in an easy to read format.
    }
}
//Step 3

function checkItem(singleItem, badFoods) { //Checks whether a certain item matches an item on the badFoods array. Accepts a string, and the badfoods array.

    for(let i = 0; i < badFoods.length; i++) { //For each item in the bad foods array, do this.
        if(singleItem.toLowerCase() == badFoods[i] ) { //compare the input to the badfoods array. Both are made lowercase for easy comparison.
            return true; //If the two are the same, return a boolean value of true.
        }
    }
return false; //If it does not match anything in the bad foods list, return a value of false.
}

function formatItem(singleItem) { //Puts an item into an easy, standardized format.

    singleItem = singleItem.trim(); //remove unneccesary spaces at the beginning and end.

    singleItem = singleItem.toLowerCase(); //Sets the inputted value to all lowercase

    singleItem = singleItem.charAt(0).toUpperCase() + singleItem.substring(1); //then capitalizes the first letter only.

    return singleItem; //Returns the singleItem which is now formatted well and easy to use.
}

/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}