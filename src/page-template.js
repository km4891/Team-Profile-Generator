const generateManagerInput = manager => {
    return `
    <div class = "row col-lg-3">
        <div class = "card border-dark">
        <h2 class = "card-header">${manager.getName()}</h2>
        <h2><i class="fas fa-mug-hot"></i>${manager.getRole()}</h2>
        <div class = "info-section">
         <ul>
            <li> ID: ${manager.getId()}</li>
            <li> Email: ${manager.getEmail()}</li>
            <li> Office Number: ${manager.getOfficeNumber()}</li>
        </div>
        </div>
    `
}

const generateEngineerInput = engineer => {
    return `
    <div class = "row col-lg-3">
        <div class = "card border-dark">
        <div class = "card-header">${engineer.getName()}</div>
        <div><i class = "fas fa-glasses></i>${engineer.getRole()}</div>
        <div class = "info-section">
         <ul>
            <li> ID: ${engineer.getId()}</li>
            <li> Email: ${engineer.getEmail()}</li>
            <li> Github Profile: ${engineer.getGithub()}<li>
        </div>
        </div>
    `
}

const generateInternInput = intern => {
    return `
    <div class = "row col-lg-3">
        <div class = "card border-dark">
        <div class = "card-header">${intern.getName()}</div>
        <div><i class = "fas fa-glasses></i>${intern.getRole()}</div>
        <div class = "info-section">
         <ul>
            <li> ID: ${intern.getId()}</li>
            <li> Email: ${intern.getEmail()}</li>
            <li> School Name: ${intern.getSchool()}<li>
        </div>
        </div>
    `
}

// main html template
const generatePage = (team) => {
    const {manager, staff} = team;
    let staffHtml = '';
    staff.forEach((staffMember) => {
        if (staffMember.getRole() === 'Engineer') {
            staffHtml += generateEngineerInput(staffMember);
        } else if (staffMember.getRole() === 'Intern') {
            staffHtml += generateInternInput(staffMember);
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
                        ${staffHtml}
                </div>
            </main>
        </body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        </html>
    `
}

module.exports = generatePage;