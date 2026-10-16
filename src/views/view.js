
function layout(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    </head>
    <body>
    <nav>
    <a href="/">Home</a>
    <a href="/sobre">sobre</a>
    <a href="/contato">contato</a>
    <a href="/admin">admin</a>
    </nav>
    ${content}
    </body>
    </html>
    `
    
}
export function homePage(){
    return layout("inicio", "<h1>Página inicial</h1>") 
}

export function sobrePage(){
    return layout("Sobre", "<h1>Sobre nos</h1>") 
}

export function contatoPage(){
    return layout("contato", "<h1>Contatos.</h1>") 
}

export function adminPage(){
    return layout("Admin", "<h1>403 Acesso negado, sem autorização<h1>") 
}

export function notfoundPage(){
    return layout("Não encontrado", "<h1>404 pagina não encontrada</h1>") 
}
export function antigoPage(){
    return layout()
}