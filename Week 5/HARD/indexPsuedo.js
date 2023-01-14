//TODO class for Employess
    //*constructor
        //name
        //role

//TODO class for Stores
    //*constructor
        //store name
        //declare an empty list of employees → array

    //*describe method
        //will print total number of employees in store
        //will print a list of all employees with their index numbers

//TODO class for Menu
    //*constructor
        //current selected store name variable set to null
        //declare an empty list of stores→ array
       
    //*describe method
        //will print a list of all stores or employees with their index numbers 
        //has to take in a parameter that is a list (array)   

    //*show main menu options method, this will display the options
        //0 Exit menu
        //1 Create a Store
        //2 View a Store
        //3 View all Stores
        //4 Delete a Store

    //*create a store method
        //will prompt for a name
        //will instantiate a new Store and add name to store list (array)
    
    //*View a store method
        //will prompt for a store number (index in array)
        //will display store info: store name, list of employees with roles 
        //while viewing a store, this is where an employee can be added/deleted  
            //use a switch statement, cases will be add employee and delete employee

    //*View all stores method
        //will display all store names and numberr (index)
        
    //*Delete a store method
        //will prompt for store number (index)
        //will remove store from list (array) using number (index)

    //*show store menu options method, this will display options for the currently selected store
        //0 Go back
        //1 Add an employee to the currently selected store
        //2 Delete an employee to the currently selected store
        //Also automatically displays this store info of employees and roles when in employee options

    //*Add an employee method to currently selected store
        //will prompt for name of employee
        //will prompt for role
        //will use current team name to instantiate a new employee and add the name and role to this store's list(array)  
        
    //*Delete employee method from currently selected store
        //will prompt for employee number (index)
        //should display this store's list of employees along with the index
        //will remove the employee from list  

    //*start menu method, will start application by showing main menu options        
        //use a switch statement, cases will determine which menu option will run

    //!Instantiate a new menu        