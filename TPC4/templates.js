exports.mainPage = function(d) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Compositores</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Música clássica</h1>
                </header>
        
                <div class="w3-container">
                    <ul>
                        <li><a href="/compositores">Compositores</a></li>
                        <li><a href="/periodos">Peridodos</a></li>
                    </ul>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}

exports.errorPage = function(errorMessage, d){
    return `
    <p>${d}: Error: ${errorMessage}</p>
    `
}

exports.compositoresListPage = function(clist, d) {
    let pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Compositores</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Compositores</h1>
                    <a href="/compositores/add">New Composer</a>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th><th>Name</th><th>Actions</th>
                        </tr>
                `
    for(let i=0; i < clist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${clist[i].id}</td>
                    <td>
                        <a href="/compositores/${clist[i].id}">
                            ${clist[i].nome}
                        </a>
                    </td>
                    <td>
                        [<a href="/compositores/edit/${clist[i].id}">Edit</a>][<a href="/compositores/delete/${clist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.compositorPage = function(compositor, d) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>${compositor.nome}</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>${compositor.nome}</h1>
                </header>
        
                <div class="w3-container">
                    <p>Id: ${compositor.id}</p>
                    <p>Nome: ${compositor.nome}</p>
                    <p>Periodo: ${compositor.periodo}</p>
                    <p>Biografia: ${compositor.bio}</p>
                    <p>Data de nascimento: ${compositor.dataNasc}</p>
                    <p>Data de obito: ${compositor.dataObito}</p>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}

exports.compositorEditForm = function(compositor, d) { 
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Edit ${compositor.nome}</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Edit ${compositor.nome}</h1>
                </header>
        
                <div class="w3-container">
                    <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Id</label>
                            <input class="w3-input w3-round" type="text" name="id" value="${compositor.id}"/>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome" value="${compositor.nome}"/>
                            <label>Periodo</label>
                            <input class="w3-input w3-round" type="text" name="periodo" value="${compositor.periodo}"/>
                            <label>Biografia</label>
                            <input class="w3-input w3-round" type="text" name="bio" value="${compositor.bio}"/>
                            <label>Data de nascimento</label>
                            <input class="w3-input w3-round" type="text" name="dataNasc" value="${compositor.dataNasc}"/>
                            <label>Data de obito</label>
                            <input class="w3-input w3-round" type="text" name="dataObito" value="${compositor.dataObito}"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                    </form>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}

exports.compositorFormPage = function(d) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>New Composer</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>New Composer</h1>
                </header>
        
                <div class="w3-container">
                    <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Id</label>
                            <input class="w3-input w3-round" type="text" name="id"/>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome"/>
                            <label>Periodo</label>
                            <input class="w3-input w3-round" type="text" name="periodo"/>
                            <label>Biografia</label>
                            <input class="w3-input w3-round" type="text" name="bio"/>
                            <label>Data de nascimento</label>
                            <input class="w3-input w3-round" type="text" name="dataNasc"/>
                            <label>Data de obito</label>
                            <input class="w3-input w3-round" type="text" name="dataObito"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                    </form>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}

exports.periodosListPage = function(plist, d) {
    let pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Periodos</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Periodos</h1>
                    <a href="/periodos/add">New Period</a>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>id</th><th>Name</th><th>Actions</th>
                        </tr>
                `
    for(let i=0; i < plist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${plist[i].id}</td>
                    <td>
                        <a href="/periodos/${plist[i].nome}">
                            ${plist[i].nome}
                        </a>
                    </td>
                    <td>
                        [<a href="/periodos/delete/${plist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.periodoPage = function(periodo, compositores) {
    pagHTML =`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>${periodo}</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>${periodo}</h1>
                </header>
        
                <div class="w3-container">
                <p>Compositores:</p>
                    <ul>
        `
        for(let i=0; i < compositores.length ; i++){
            pagHTML += `
                            <li>
                                <a href="/compositores/${compositores[i].id}">
                                    ${compositores[i].nome}
                                </a>
                            </li>
            `
        }

        pagHTML += `
                        </ul>
                    </div>
                    <footer class="w3-container w3-blue">
                        <h5>Generated by RPCW2023</h5>
                    </footer>
                </div>
            </body>
        </html>
        `
    return pagHTML
}

exports.periodoFormPage = function(d) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>New Period</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>New Period</h1>
                </header>
        
                <div class="w3-container">
                    <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                    </form>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}