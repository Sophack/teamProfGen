//created a class with constructor values 
class Employee {
    constructor(name, id, email) {
    //calling the function using above keys
    this.name = name;
    this.id = id;
    this.email = email;    
    }

//get functions to retrieve info 

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email 
    }

    getRole(){
        return 'Employee';
    }

}