// Require e uma ferramenta que efetua o carregamento do modulo que estamos solicitando
var http= require('http');

// Executamos o metodo para criar o servidor
var server = http.createServer( function(request,response){

	console.log(request.url);

	response.writeHead(200,{'Content-type':'text/html'});
	if(request.url === "/"){
		response.write('<h1>Pagina incial');
	}
	else if(request.url ==="/sobre"){
		response.write('<h1>Sobre</h1>');
	}
	else{
		response.write('<h1>Pagina nao encontrada</h1>');
	}

	response.end();	
});

//Inciamos o server
server.listen(3000, function(){
	console.log("Server online na porta 3000");
})

// Verificando a URL
