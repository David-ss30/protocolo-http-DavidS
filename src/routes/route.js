import {homePage, sobrePage, antigoPage, adminPage, contatoPage, notfoundPage} from "../views/view.js"
export function route(req, res){

    if (req.method === "GET" && req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(homePage())
        return
    }
    if (req.method === "GET" && req.url === "/sobre"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(sobrePage())
        return
    }
    if (req.method === "GET" && req.url === "/antigo"){
        res.writeHead(301, {"location": "/sobre"})
        res.end(antigoPage())
        return
    }
    //nesse trecho foi utilizado IA
    if (res.method === 'GET' && req.url === '/busca') {
    const termo = parsedUrl.query.termo;

    if (!termo) {
      // Sem o parâmetro termo -> Status 400 (Bad Request)
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Erro 400: O parâmetro "termo" é obrigatório.');
    } else {
      // Com o parâmetro -> Status 200 exibindo o termo
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>Resultado da busca</h1><p>Você pesquisou por: <strong>${termo}</strong></p>`);
    }
    return;
    }
    if (req.method === "GET" && req.url === "/admin"){
        res.writeHead(403, {"Content-Type": "text/html"})
        res.end(adminPage())
        return
    }
    //trecho feito com IA
    if (req.url === "/contato"){
        if(req.method === "GET"){
        res.writeHead(403, {"Content-Type": "text/html"})
        res.end(contatoPage())
        }else{
            res.writeHead(405, {'Content-Type': 'text/plain; charset=utf-8',
        'Allow': 'GET'})
        res.end('Erro 405: Método não permitido. Utilize apenas GET.');
        }
        return
    }
    else{
    res.writeHead(404, {"Content-type" : "text/html"});
    res.end(notfoundPage());
    return;
    }
}