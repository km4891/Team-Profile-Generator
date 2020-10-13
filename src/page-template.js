const generateManagerInput = manager => {
    return `
    <div class = "col col-lg-3">
        <div class = "card border-dark">
        <div class = "card-header">${manager.getName()}</div>
        <div><i class = "fas fa-mug-hot></i>${manager.getRole()}</div>
        <div class = "info-section">
         <ul>
            <li> ID: ${manager.getId()}</li>
            <li> Email: ${manager.getEmail()}</li>
            <li> Office Number: ${manager.getOfficeNumber()}<li>
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
            staffHtml += generateEngineer(staffMember);
        } else if (staffMember.getRole() === 'Intern') {
            staffHtml += generateIntern(staffMember);
        }
    });
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profiles</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
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
        <script src="https://use.fontawesome.com/releases/v5.14.0/js/all.js" data-auto-replace-svg="nest"></script>
        </html>
    `
}

module.exports = generatePage;