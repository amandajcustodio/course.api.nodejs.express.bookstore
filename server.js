import "dotenv/config";
import app from "./src/app.js";


const PORT = 3000;

// A variável app que recebe o valor do express se encarrega de criar o servidor, que estava sendo feito de forma manual 
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end(routes[req.url]);
// });

app.listen(PORT, () => {
    console.log("Escutando na porta 3000!");
});