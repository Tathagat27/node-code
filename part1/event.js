const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celibrity for observer 1
celebrity.on('race',(result) => {
    if(result==='win'){
    console.log('Congratulations!!!');
    }
})
// Subscribe to celibrity for observer 2
celebrity.on('race',(result) => {
    if(result==='win'){
    console.log('Boooo!!!');
    }
})

process.on('exit', (code)=>{
    console.log('Process exit event with code: ',code);
})

celebrity.emit('race','win');
celebrity.emit('race','lost');