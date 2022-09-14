let http = require ('http');
let fs = require ('fs');
let url = require ('url');

const  EventEmitter  = require('events');

let App = {
    start: function(port) {

        let emitter = new EventEmitter()

        let server = http.createServer((request, response) => {

            response.writeHead(200, { 'Content-type': 'text/html; charsert=utf-8' })

            if(request.url === '/') {
                emitter.emit('root', response)
            }
            response.end()

        }).listen(port)

        return emitter
    }
}

let app = App.start(3000)

app.on('root', function(response){
    response.write('tout le root !!')
})

// http.createServer((request, response) => {

    
//     response.writeHead(200, { 'Content-type': 'text/html; charsert=utf-8'});

//     let query = url.parse(request.url, true).query
//     let name = query.name === undefined ? 'anonyme' : query.name

//     fs.readFile('index.html','utf-8', (err,data) => {

//         if (err) {
//             response.writeHead(404)
//             response.end("File doesn't exist");
//         }
//         else{
//             response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    
//         }
        
//         data = data.replace('{{ name }}', name)
//         response.end(data)
//     })
// })

// .listen(3000)

