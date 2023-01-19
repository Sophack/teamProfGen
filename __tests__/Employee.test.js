const Employee = require("../lib/Employee"); 
const employee = new Employee('saraf', '1', 'sarafnrealtor@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
        expect(employee.name).toBe('saraf');
        expect(employee.id).toBe('1');
        expect(employee.email).toBe('sarafnrealtor@gmail.com');
});

test('test of we can get the name from the getName() method', () => {
        expect(employee.getName()).toBe('saraf');
});

test('test of we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1');
});

test('test of we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('sarafnrealtor@gmail.com');
});

test('test of we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});