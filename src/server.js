import http, { createServer } from "http"
import { route } from "./routes/route.js"

const server = http.createServer(route);

server.listen(3000, () =>
{console.log("Server running at http://localhost:3000");
})
