const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const generatePage = require ('./src/page-template');
const { writeFile, copyFile } = require('./util/generate-site')

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

      
};



    const staffInput = (team) => {
        return inquirer.prompt([ {
        
            type: 'input',
            name: 'name',
            message: "Enter an employee's name. (Required)",
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
            message: "Enter an empployee's ID.",
        },
        
        {
            type: 'input',
            name: 'email',
            message: "Enter an employees's email.",
        },
        {
            type: 'list',
            name: 'role',
            message: "Enter employee's role.",
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter an engineer's Github username.",
            when: (member) => {
                return member.role === 'Engineer'
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the school name the intern's attends.",
            when: (member) => {
                return member.role === 'Intern'
            },
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Add another employee?",
            default: false,
        },
        ])
        .then (employee => {
            if (employee.role === 'Engineer') {
                const {name, id, email, github} = employee;
                team.staff.push(new Engineer(name, id, email, github))
            } else if (employee.role === 'Intern') {
                const {name, id, email, school} = employee;
                team.staff.push(new Intern(name, id, email, school))
            } 
            if (employee.addEmployee) {
                return staffInput(team)
            } else {
                return team;
            }
          })
       };

       managerInput()
        .then (managerResponse => {
            const {name, id, email, phoneNumber} = managerResponse;
            const manager = new Manager(name, id, email, phoneNumber);

            return {
                manager,
                staff: [],
            }
        })
        .then (staffInput)
        .then(generatePage)
        .then ( (data) => writeFile(data))
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
       })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
       
    

