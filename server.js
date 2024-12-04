import http from 'http';
import fs from 'fs/promises'
import url from 'url'
import path from 'path';

var PORT = process.env.PORT;

//Get current path 
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname)
const server = http.createServer(async(req,res)=> {
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 404;
    try {
        //check if GET request 
        if(req.method === 'GET') {
        let filePath;
         if(req.url === '/'){
         filePath = path.join(__dirname,'public','index.html')
          //res.writeHead(200,{'content-Type': 'text/html'});
         // res.end('<h1> HomePage </h1>');

        }else if(req.url === '/about'){
           filePath =path.join(__dirname,'public','about.html')
        //res.writeHead(200,{'content-Type': 'text/html'});
        //res.end('<h1> About</h1>');

        }else {
              throw new Error('Not Found')
        }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end()
       
        }
       /* else {
            throw new Error('method not allowed')
        }*/
    } catch (error) {
        res.writeHead(500,{'content-Type': 'text/html'});
        res.end('<h1>Server Error</h1>');
    }
    
});

server.listen(PORT,() => {
    console.log(`Server running on  port ${PORT}`);
})