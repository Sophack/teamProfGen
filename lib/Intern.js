//creating variable to store directory path 
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school 
    }
    getRole(){
        return 'Intern'
    }
    getSchool () {
        return this.school 
    }
}

//export intern 

module.exports = Intern; 