class Employees{
    constructor(name, role){
        this.name = name;
        this.role = role;
    }
}

class Store{
    constructor(name){
        this.name = name;
        this.employees = [];
    }

    describeStoreEmployees(store){
        
        let totalEmployees = `${store.name} has ${store.employees.length} employee(s).`
        
        let employeeList= "";
        for(let i = 0; i < store.employees.length; i++){
            employeeList += `
            ${i}) ${store.employees[i].name}, ${store.employees[i].role}`;
        }
        return `${totalEmployees} ${employeeList}`;
    }
}

class Menu extends Store{
    constructor(){
        super();
        this.selectedStore = null;
        this.stores = [];
    }

    describe(list){
        let displayList='';
        for(let i = 0; i < list.length; i++){
           displayList += `
           ${i}) ${list[i].name}`;
        }
        return `Store Options: ${displayList}`;
    }
    
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

    createStore(){
        let storeName = prompt("Enter name for new Store:");
        this.stores.push(new Store(storeName));
    }

    viewStore(){
        let storeIndex = prompt(`
        Enter the index of the store you want to View:
        -----------------------------------------------
        ${this.describe(this.stores)}
        `);
        
        if(storeIndex > -1 && storeIndex < this.stores.length){
            this.selectedStore = this.stores[storeIndex];
            
            let selection = this.showStoreMenuOptions(this.selectedStore);
            switch(selection){
                case "1": this.addEmployee();
                break;
                case "2": this.deleteEmployee();
            }
        }
    }

    viewAllStores(){               
        let storeNames= "";
        for(let i = 0; i < this.stores.length; i++){
            storeNames += `
            ${i} ${this.stores[i].name}`;
        };
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

    addEmployee(){
        
        let employeeName = prompt(`Enter NEW employee name:`);
        let employeeRole = prompt (`Enter NEW employee role:`);
        this.selectedStore.employees.push(new Employees(employeeName, employeeRole));
    }

    deleteEmployee(){
       
        let deleteEmployeeAtIndex = prompt(`
        Enter the index of the employee you want to DELETE:
        -----------------------------------------------
        ${this.selectedStore.describeStoreEmployees(this.selectedStore)}
        ` );

        if(deleteEmployeeAtIndex >= 0 && deleteEmployeeAtIndex < this.selectedStore.employees.length){
            this.selectedStore.employees.splice(deleteEmployeeAtIndex, 1);
        };
    }

    showStoreMenuOptions(){
       return prompt(`
       Enter an Employee Option:
       0) Go back
       1) Add employee
       2) Delete an employee
       `);         
    }; 

    startMenuApp(){
        let selection = this.showMainMenuOptions();
        while(selection !=0){
            switch(selection){
                case '1': this.createStore();
                break;

                case '2': this.viewStore();
                break;

                case '3': this.viewAllStores();
                break;

                case '4': this.deleteStore();
                break;
                
                default: selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye! You have exited the Menu.");
    }
}

let menu = new Menu();
menu.startMenuApp();0