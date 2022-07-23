const http = require('http');
const path = require('path');

const PORT = 4000;

const server = http.createServer();

const friends = [
    {
        id:0,
        name: 'heheheehe',
    },
    {
        id:1,
        name: 'hoho',
    },
    {
        id:2,
        name: 'lol',
    }
]

server.on('request' , ((req,res) => {
    const items = req.url.split('/')
    // /friends/2 => ['', 'friends' , '2']
    if(req.method === 'POST' && items[1] === 'friends'){
        
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend))
        });
        req.pipe(res);

    } else if(req.method === 'GET' && items[1] === 'friends'){
        
        // res.writeHead(200 , {
        //     'content-type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        if(items.length === 3){
            const friendIndex = +items[2]                // that '2 is a string ,so converting it into a number
            res.end(JSON.stringify(friends[friendIndex]))
        } else {
            res.end(JSON.stringify(friends));
        }
        
    }else if(req.method === 'GET' && items[1] === 'messages')
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
   
}))

server.listen(PORT , () => {                        //127.0.0.1 => localhost
    console.log(`Listening on port ${PORT}`);
});