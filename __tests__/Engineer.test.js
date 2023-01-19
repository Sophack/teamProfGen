const Engineer = require('../lib/Engineer');
const engineer = new Engineer('saraf', '1', 'sarafnrealtor@gmail.com', 'sophack'); 

test('test to see if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('saraf');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('sarafnrealtor@gmail.com');
    expect(engineer.githubUsername).toBe('sophack');
}); 

test('test to see if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('saraf');
    
});

test('test to see if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1');
    
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('sarafnrealtor@gmail.com');
    
});


test('test to see if we can get the github username from the getGithub() method', () => {
    expect(engineer.Github()).toBe('sophack');
    
});

test('test to see if we can get the role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});