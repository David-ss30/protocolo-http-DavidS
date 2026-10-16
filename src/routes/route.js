export function route(req, res){

    if (req.method === "GET" && req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end()
        return
    }
}