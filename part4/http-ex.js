        // const http = require('http');

        // const req = http.request('http://www.google.com', (res)=>{
        //     res.on('data', (chunk)=>{
        //         console.log(`data chunk: ${chunk}`);
        //     });
        //     res.on('end' , ()=>{
        //         console.log('no more data');
        //     });
        // });

        // req.end();

                    // const {request} = require('http');

                    // const req = request('http://www.google.com', (res)=>{
                    //     res.on('data', (chunk)=>{
                    //         console.log(`data chunk: ${chunk}`);
                    //     });
                    //     res.on('end' , ()=>{
                    //         console.log('no more data');
                    //     });
                    // });

                    // req.end();



const {get} = require('http');

 get('http://www.google.com', (res)=>{
    res.on('data', (chunk)=>{
    console.log(`data chunk: ${chunk}`);
       });
    res.on('end' , ()=>{
    console.log('no more data');
       });
 });
                    
                                      