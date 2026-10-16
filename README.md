Explicação teorica.

Cliente e servidor:{
É o processo de solicitação que o cliente(navegadores, ex: google, edgar...) faz para um servidor(Local onde se armazena as paginas, sites ou aplicativos) em busca de dados, assim recebendo uma resposta entregue pelo servidor. ex: Serviço de entrega de comida, o ifood envia uma requisição do seu pedido para o restaurante, logo em seguida o restaurante enviara a solicitação feita.

DNS:O dns é o endereço ip porem disfarçado para ser algo mais simplificado, que facilita a lembraça em vez de numeros grandes e reais(ex: aplicativos grandes de entrega: ifood, keeta e etc.).

conexão:A conexão é feita pela a internet, permitindo que os dados percorra de um ponto até o outro(ex: rua). Porem é necessario algo que percorra essa conexão, são elas o tcp/ip que controlam como esses dados travegam pela internet(ex: entregadores)

fonte: https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
}

Anatomia de requisição e da resposta:{

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

    A solicitação é feita via html para solicitar as paginas


     if (req.url === "/contato"){
        if(req.method === "GET"){
        res.writeHead(403, {"Content-Type": "text/html"})
        res.end(contatoPage())
        }else{

    Enquanto o servidor responde me enviando a pagina que é solicitada        
}

Métodos:{
GET: Solicita um recurso específico, retornando necessariamente apenas dados.

HEAD: Solicita um recurso específico igual o get, porem sem corpo de resposta(independentemente).

POST: Envia dados especificos para o servidor.

PUT: Faz uma atualização em uma informação que ja tem dentro do servidor

DELETE: Apaga uma informação do servidor

PATCH: Diferente do put que faz a alteração completa o patch faz a alteração sem que altere completamente a informação, podendo escolher uma informação especifica.

idempotente: Fazer uma requisição identica uma ou varias vezes, sem prejudicar o servidor(tirando a alteração de dados). os metodos idempotentes são get, head, put e delete.

Seguros: são metodos idempotentes, que não prejudicam o servidor

font:
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Methods
}

Codigo de status:{
Respostas informativas(100-199)
Respostas bem-sucedidas (200 – 299)
200 ok: que a solicitação deu certo
201 created: a solicitação funcionou e uma informação foi criada ou alterada pelo put ou push
Mensagens de redirecionamento (300 – 399)
301 Moved Permanently: A url do recurso foi alterada permanentemente e a nova URL ira parecer junto da resposta
302 Found: A uri foi altereda temporariamente
301 e 302 diferença: um altera a url permanente e a outra apenas temporariamente
304 Not Modified: Significa que a resposta não foi alterada, então pode não ira mudar a resposta feita
Respostas de erro do cliente (400 – 499)
400 bad request: O servidor não entendeu o pedido feito pelo cliente por conta de erro
401 unauthorized:Significa que o cliente não esta autenticado ou não foi reconhecido pelo servidor
403 forbidden: O cliente não tem direito ao conteudo solicitado, porem mesmo assim foi reconhecido pelo servidor. 
401 e 403 diferança: Apesar de ambos não receber as informações do servidor, o 401 não foi identificado pelo servidor, não tendo uma conta muito prov
almente ja o 403 até foi identificado porem não tem autorização
404 not found: arquivo não encontrado ou não existe
405 method not allowd: O metodo de requisição não é suportado.
Respostas de erro do servidor (500 – 599)
500 internal server error: deu pau e nem o servidor sabe o que rolou.

font: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status
}

Cabeçalhos:{

o que é: permite transmitir informação a mais para o servidor ou o servidor para o cliente.

Content-Type: indica o tipo de arquivo.
Content-Length: indica o tamanho do corpo.
Location: Indica a URL.
Allow: lista os metodos suportados pelo recurso, impedindo o erro 405.
Cache-Control: usado para especificar diretivas para mecanismos de cache tanto em requisições quanto em respostas.
User-Agent: Permite ver de onde esta sendo a solicitação, qual o navegador, a versão e etc.
Accept: Define quais tipos de dados podem ser enviados de volta.

font: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers
}

HTTP{
Stateless: Significa que o servidor não guarda o historico de solicitação, tornando as requisições rapidas e com menos perigo de sobrecarga.

http x https: O https é o http porem criptografado por SSL ou TLS, tornando a conexão de cliente e servidor segura.

font:https://developer.mozilla.org/pt-BR/docs/Glossary/HTTPS
https://www.youtube.com/watch?v=ZLhJzBNdWUM
}

Test via terminal:{
    Meu vscode por algum motivo não esta deixando eu rodar o servidor e o terminal junto, então não consegui fazer o teste
}

Conclusão:Após o trabalho, entendi que o banco de dados pode ser bem complexo e apenas não utilizar os metodos, cabeçalhos e codigos de status, deixavam o trabalho vazio e incompleto. Espero que com os novos conhecimentos consiga direcionar melhor a criação do banco de dados

Declaração de uso de ia:

Google gemini (Gemini auto modelo 3). Ferramenta de IA generativa.
data de uso: 15/10/2026
finalidade:Ajuda para criar as rotas e orientação para usar a aba network do devTOOLS