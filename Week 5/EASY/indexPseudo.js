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
// let car1 = new Car("honda", "civic");
// let car2 = new Car("ford", "explorer");
// console.log(car1, car2);

class Menu{
    constructor(){
        this.cars=[];
    }

    showMainMenu(){

        //SHOW options
        return prompt(`
        Main Menu:
        ---------------------------------------
        0) Exit Menu
        1) Add Car
        2) Delete Car
        3) View All Cars
        `);
    };

    startApp(){
        let selection = this.showMainMenu();

        while(selection != 0){
            switch(selection){
                case "1": alert("Add car coming soon");
                break;
                case "2": alert("Delete cars coming soon");
                break;
                case "3": alert("View inventory coming soon");
                break;
                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu...Goodbye!");
    }
}

let menu = new Menu();
menu.startApp();