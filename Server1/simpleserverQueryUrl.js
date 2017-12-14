// Require e uma ferramenta que efetua o carregamento do modulo que estamos solicitando
var http = require('http');
var url = require('url'); 

// Executamos o metodo para criar o servidor
var server = http.createServer( function(request,response){

	console.log(request.url);

	response.writeHead(200,{'Content-type':'text/html'});

	// efetuando o parse das informacoes da URL
	var result = url.parse(request.url, true);

	 for(key in result.query){
	 	response.write("<h1>" + key + ": <b>"+ result.query[key] +"</b></h1>");
	 }

	response.end();	
});

//Inciamos o server
server.listen(3000, function(){
	console.log("Server online na porta 3000");
})

// Verificando a URL
