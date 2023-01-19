const Employee = require("./Employee"); 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name,id,email)
        this.github = github
    }
    getRole(){
        return 'Engineer'
    }
    getGitHub(){
        return this.github
    }
}

//export Engineer 

module.exports = Engineer; 

