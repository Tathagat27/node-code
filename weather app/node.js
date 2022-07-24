const http = require('http')
const fs = require('fs')
let requests = require('requests')

const PORT = 6000

const indexFile = fs.readFileSync('index.html', 'utf-8')

// const replaceval=(temp,org)=>{
//     org.main.temp=(org.main.temp-273.15).toFixed(2);;
//     org.main.temp_min=(org.main.temp_min-273.15).toFixed(2);;
//     org.main.temp_max=(org.main.temp_max-273.15).toFixed(2);;
  
//       let temperature=temp.replace("{%tempval%}",org.main.temp);
//        temperature=temperature.replace("{%tempmin%}",org.main.temp_min);
  
//      temperature=temperature.replace("{%tempmax%}",org.main.temp_max);
  
//        temperature=temperature.replace("{%location%}",org.name);
//        temperature=temperature.replace("{%country%}",org.sys.country);
//       return temperature; 
  
  
//   };

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Ballia&appid=3fdfa14b9254a31c3a0eef6b6e366d55')

     .on('data',  (chunk) =>{
    // const objdata=JSON.parse(chunk);
    // const arr=[objdata];
    // console.log(objdata);
    console.log(chunk);
     })
   
    .on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
// //  console.log(arr[0].main.temp);
//   const realdata=arr.map((val)=>{
   
//     return replaceval(indexFile,val);
//   });

//    const realdata1=realdata.join("");
  
//   res.write(realdata1);
//  //console.log(realdata1);
// })


}
})

server.listen(PORT , () => {
    console.log(`listening on PORT ${PORT}`);
})