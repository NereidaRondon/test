//! DIRECTIONS:
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// • Use at least one array.
// • Use at least two classes.
// • Your menu should have the options to create, view, and delete elements.


//create a class for Employees, this is the blueprint
class Employees{
    constructor(name, role){
        //every employee will have name and a job role
        this.name = name;
        this.role = role;
    }
}

//create a class for Store, this is the blueprint
class Store{
    constructor(name){
        //each store will have a name and a list of employees
        this.name = name;
        //the list is an empty array to start, until employees are added to each store
        this.employees = [];
    }

    //this method will be used to print out Store information for the selected store
    describeStoreEmployees(store){
        
        //This variable will print a string with the store's name and total employees
        let totalEmployees = `${store.name} has ${store.employees.length} employee(s).`
        
        //This variable will be used to print out all of the current employees for the selected store, including the index numbers
        let employeeList= "";
        for(let i = 0; i < store.employees.length; i++){
            employeeList += `
            ${i}) ${store.employees[i].name}, ${store.employees[i].role}`;
        }
        return `${totalEmployees} ${employeeList}`;
    }
}

//create a menu class, this is the blueprint for the whole menu
//Had to extend Store for this Menu so that I could use the employees array from Store
class Menu extends Store{
    constructor(){
        //this is how we can use methods and variable from the Store class
        super();
        //this variable will store the currently selected store from the stores array
        this.selectedStore = null;
        //the list is an empty array to start, until stores are added
        this.stores = [];
    }

    //this method will loop through a fed in array list and print out the elements in the array along with the index numbers
    describe(list){
        let displayList='';
        for(let i = 0; i < list.length; i++){
           displayList += `
           ${i}) ${list[i].name}`;
        }
        return `Store Options: ${displayList}`;
    }
    
    //this method will show menu options when the menu runs... it displays the information for the user to know what the options are and prompts for an input
    showMainMenuOptions(){
        return prompt(`
        Main Menu:
        -----------------------------------------------
        0) Exit Menu
        1) Create Store
        2) View Store
        3) View All Stores
        4) Delete Store
        `);
    }

    //this method prompts the user for the name of the new Store, then adds the name to the store array
    createStore(){
        let storeName = prompt("Enter name for new Store:");
        this.stores.push(new Store(storeName));
    }

    //this method prompts the user to enter in a store index number 
    viewStore(){
        
        //displays the store names and index numbers using the describe() method so the user can see what the index numbers are.
        let storeIndex = prompt(`
        Enter the index of the store you want to View:
        -----------------------------------------------
        ${this.describe(this.stores)}
        `);
        
        //After user enters a selection, a new prompt pops up.
        //the input selection is used to determine the store 
        if(storeIndex > -1 && storeIndex < this.stores.length){
            //here is where we save the currently selected store into the selectedStore variable
            this.selectedStore = this.stores[storeIndex];
            
            //new menu for the currently selected store with options pops up and the case is selcted depending on the user input
            //any other imput that is not 1 or 2 will go back to the main menu
            let selection = this.showStoreMenuOptions(this.selectedStore);
            switch(selection){
                case "1": this.addEmployee();
                break;
                case "2": this.deleteEmployee();
            }
        }
    }
    //this method will show all of the names of the stores
    viewAllStores(){               
        
        let storeNames= "";
        for(let i = 0; i < this.stores.length; i++){
            storeNames += `
            ${i} ${this.stores[i].name}`;
        };
        //this will provide instructions to go back to the main menu while it displays the names of all of the stores with the index number
        return alert(`
        0) Back to Main Menu
        -----------------------------------------------
        ${storeNames}`);

    }
    
    deleteStore(){
        let deleteStoreAtIndex = prompt(`Enter the index of store you want to DELETE:`);

        if(deleteStoreAtIndex >= 0 && deleteStoreAtIndex < this.stores.length){
            this.stores.splice(deleteStoreAtIndex, 1);
        }; 
    }
    //this mehtod adds an employee to the employees array for the current store
    addEmployee(){
        //prompting user for name and role inputs
        let employeeName = prompt(`Enter NEW employee name:`);
        let employeeRole = prompt (`Enter NEW employee role:`);
        //this is instantiating a new employee with a name and role
        this.selectedStore.employees.push(new Employees(employeeName, employeeRole));
    }

    //this method will delete an employee for the currently selected store
    //displays the store's employees and index numbers so users can choose from
    deleteEmployee(){
        //prompting user for a selction input
        let deleteEmployeeAtIndex = prompt(`
        Enter the index of the employee you want to DELETE:
        -----------------------------------------------
        ${this.selectedStore.describeStoreEmployees(this.selectedStore)}
        ` );

        //waits for user input, validates its a valid index number and removes that element from the employees array
        if(deleteEmployeeAtIndex >= 0 && deleteEmployeeAtIndex < this.selectedStore.employees.length){
            this.selectedStore.employees.splice(deleteEmployeeAtIndex, 1);
        };
    }

    //prompts the user for a selection of provided options
    showStoreMenuOptions(){
       return prompt(`
       Enter an Employee Option:
       0) Go back
       1) Add employee
       2) Delete an employee
       `);         
    }; 


    startMenuApp(){
        //this variable will be the value of the input chosen by user in the showMainMenuoptions prompt
        let selection = this.showMainMenuOptions();

        //as long as the selection is not 0, then the switch will run
        while(selection != 0){
            //the selection input will determine the case and which menu will run next
            switch(selection){
                case '1': this.createStore();
                break;

                case '2': this.viewStore();
                break;

                case '3': this.viewAllStores();
                break;

                case '4': this.deleteStore();
                break;
                //any number other than 1-4 will automatically be converted to 0
                default: selection = 0;
            }
            //if no case is selected, then the menu will pop up again prompting for a new selection 
            selection = this.showMainMenuOptions();
        }
        //if selection = 0, then the user is exited out of the app
        alert("Goodbye! You have exited the Menu.");
    }
}
//create a new instance of the menu class
//establish a varaible for menu that will build a new menu
let menu = new Menu();

//take the new Menu and invoke the method that shows the menu
menu.startMenuApp();

        