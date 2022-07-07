const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/friends'){
        // res.writeHead(200 , {
        //     'content-type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify({
            id:1,
            name: 'heheheehe',
        }));
    }else if(req.url === '/messages')
    {
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>hello!!!everyone....</li>');
        res.write('<li>i am Tathagat Tiwari</li>');
        res.write('</ul>'); 
        res.write('</body>'); 
        res.write('</html>');   
        res.end();  
    }else{
        res.statusCode = 404;
        res.end();
    }
   
})

server.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`);
});