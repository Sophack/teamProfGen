const Intern = require('../lib/Intern');
const intern = new Intern('saraf', '1', 'sarafnrealtor@gmail.com', 'University of Toronto');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('saraf');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('sarafnrealtor@gmail.com');
    expect(intern.school).toBe('University of Toronto');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('saraf');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('sarafnrealtor@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('University of Toronto');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});