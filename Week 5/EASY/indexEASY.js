//TODO Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//* Use at least one array.
//* Use at least two classes.
//* Your menu should have the options to create, view, and delete elements.

//this class is the blueprint for car, a new car can be created using this class
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
//this class is the blueprint for the menu app
class Menu{
    constructor(){
        //in this class, the cars are added or deleted from the car list (array)
        //the array starts off empty until cars are added via the menu app options
        this.cars=[];
    }

    //Shows the options for the menu on the prompt pop up
    //the user has to make a selection by inputing a number     
    showMainMenu(){
        return prompt(`
        Main Menu:
        ---------------------------------------
        0) Exit Menu
        1) Add Car
        2) Delete Car
        3) View All Cars
        `);
    };

    //this method prompts the user for input that will become the car make and model
    //a new car is instantiated using the NEW keyword and the inputs
    //then a new car is added to the cars list (array) using the .push()
    addCar(){
        let carMake = prompt("Enter car make:");
        let carModel = prompt("Enter car model:");
        this.cars.push(new Car(carMake, carModel));
    }

    //when this method is invoked, it prompts the user for an input 
    //the input becomes the index of the car that is to be deleted
    //the car is removed from the cars list (array) using .splice()
    //in .splice()  the first parameter is index, the second parameter is how many items to be deleted
    deleteCar(){
        let carIndex = prompt ("Enter car to DELETE:");
        this.cars.splice(carIndex, 1);
    }
    //this method uses a for loop to iterate through the cars list (array)
    //then puts the cars together in the variable display cars as a string
    //then alerts the cars make and model in the pop up
    viewAllCars(){
        let displayCars = '';
        for(let i = 0; i < this.cars.length; i++){
            displayCars += `
            ${i}) ${this.cars[i].make} ${this.cars[i].model}`;
        }
        alert(`
        Car Inventory: 
        ---------------------------------------
        ${displayCars}`);
    }
    //this method invokes the showMainMenu() method which shows the menu options
    //the input recieved from the user in the showMainMenu() prompt is assigned to the variable selection
    //Then the switch statement loops through the cases if the input is NOT zero
    //each case invokes a method, the default assigns the selection variable to zero
    //if default is triggered, then the while loop ends because selection equals zero
    //then the main menu is prompted again
    //if the user inputs zero, then the switch case will not run 
    //the while loop will evaluate that selection is zero 
    //for the code inside the while loop to run selection can NOT be zero
    //if the while loop ends without executing, then the user will be exited from the menu app
    startApp(){
        let selection = this.showMainMenu();

        while(selection != 0){
            switch(selection){
                case "1": this.addCar();
                break;
                case "2": this.deleteCar();
                break;
                case "3": this.viewAllCars();
                break;
                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu...Goodbye!");
    }
}

//this assigns the variable menu to a new instance of the Menu class
//then the variable is used to invoke the method that starts prompting the menu
//without this instantiation and invocation, the menu app will not run in the window
let menu = new Menu();
menu.startApp();