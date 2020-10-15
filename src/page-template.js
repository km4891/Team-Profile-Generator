const generateManagerInput = manager => {
    return `
    <div class ="col col-sm-12 col-md-6 col-lg-4">
        <div class="card  ml-2">
        <div class = "card-border">
            <h2 class="card-header">${manager.getName()}</h2>
            <h3 class="card-title ml-2"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3></div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getName()}</a></li>
                    <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateEngineerInput = engineer => {
    return `
    <div class ="col col-sm-12 col-md-6 col-lg-4">
        <div class="card  ml-2">
        <div class = "card-border">
            <h2 class="card-header">${engineer.getName()}</h2>
            <h3 class="card-title ml-2"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h3></div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getName()}</a></li>
                    <li class="list-group-item"> GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateInternInput = intern => {
    return `
    <div class ="col col-sm-12 col-md-6 col-lg-4">
        <div class="card  ml-2">
        <div class = "card-border">
            <h2 class="card-header">${intern.getName()}</h2>
            <h3 class="card-title ml-2"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3></div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getName()}</a></li>
                    <li class="list-group-item"> School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

// main html template
const generatePage = (team) => {
    const {manager, staff} = team;
    let staffCompile = '';
    staff.forEach((staffMember) => {
        if (staffMember.getRole() === 'Engineer') {
            staffCompile += generateEngineerInput(staffMember);
        } else if (staffMember.getRole() === 'Intern') {
            staffCompile += generateInternInput(staffMember);
        }
    });
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha512-MoRNloxbStBcD8z3M/2BmnT+rg4IsMxPkXaGh2zD6LGNNFE80W3onsAhRcMAMrSoyWL9xD7Ert0men7vR8LUZg==" crossorigin="anonymous" />
            <link rel="stylesheet "href="./style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <div class="row">
                        ${generateManagerInput(manager)}
                        ${staffCompile}
                </div>
            </main>
        </body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        </html>
    `
}

module.exports = generatePage;