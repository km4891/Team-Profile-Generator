const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const managerInput = () => {
    return inquirer.prompt([ {
        
        type: 'input',
        name: 'name',
        message: 'Enter a managers name. (Required)',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a valid response!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter a manager's ID.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter a manager's email.",
    },
    {
        type: 'input',
        name: 'phoneNumber',
        message: "Enter a manager's phone number."
    }

    ])

    .then(response => {
        const newManager = new Manager(response.name, response.id, response.email, response.phoneNumber);
        employees.push(newManager);
        staffInput();
    });
};

    const engineerInput = () => {
        return inquirer.prompt([ {
        
            type: 'input',
            name: 'name',
            message: "Enter an engineer's name. (Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a valid response!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter an engineer's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter an engineer's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter an engineer's Github username."
        }
    
        ])
    };

    engineerInput();


    
