// Require e uma ferramenta que efetua o carregamento do modulo que estamos solicitando
var http= require('http');
var url = require('url'); 
var circulo = require("./circulo");

// Executamos o metodo para criar o servidor
var server = http.createServer( function(request,response){

		console.log(circulo);
		var result = url.parse(request.url, true);
		var raio = result.query.raio;

		response.writeHead(200, {'Content-type':'text/html'})
	 	response.write("<h1>Raio e: <b>"+ circulo.area(raio) +"</b></h1>");
	
		response.end();	

});

//Inciamos o server
server.listen(3000, function(){
	console.log("Server online na porta 3000");
})
