const generateManagerInput = manager => {
    return `
    <div class = "col col-lg-3">
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
    <div class = "col col-lg-3">
        <div class = "card border-dark">
        <div class = "card-header">${manager.getName()}</div>
        <div><i class = "fas fa-glasses></i>${manager.getRole()}</div>
        <div class = "info-section">
         <ul>
            <li> ID: ${manager.getId()}</li>
            <li> Email: ${manager.getEmail()}</li>
            <li> Office Number: ${manager.getGithub()}<li>
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
            staffHtml += generateIntern(staffMember);
        }
    });
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha512-M5KW3ztuIICmVIhjSqXe01oV2bpe248gOxqmlcYrEzAvws7Pw3z6BK0iGbrwvdrUQUhi3eXgtxp5I8PDo9YfjQ==" crossorigin="anonymous">
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