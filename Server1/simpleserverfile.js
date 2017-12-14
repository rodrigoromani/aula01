// Require e uma ferramenta que efetua o carregamento do modulo que estamos solicitando
var http = require('http');
var fs= require('fs'); 

// Executamos o metodo para criar o servidor
var server = http.createServer( function(request,response){

	fs.readFile(__dirname + '/index.html', function(err,html){
		response.writeHead(200, {'Content-type':'text/html'})
		response.write(html);
		response.end();	

	})

	
});

//Inciamos o server
server.listen(3000, function(){
	console.log("Server online na porta 3000");
})

