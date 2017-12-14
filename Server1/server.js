// Require e uma ferramenta que efetua o carregamento do modulo que estamos solicitando
var http= require('http');
var faker = require('faker'); 

// Executamos o metodo para criar o servidor
var server = http.createServer( function(request,response){


		response.writeHead(200, {'Content-type':'text/html'})

		var randomName = faker.name.findName();
		var randomImage = faker.internet.avatar();
		response.write('<center><br><h1>'+ randomName +"</h1><br><img src='" + randomImage +"' style='border-radius:80px; border:solid 6px blue;'/></center>");

		response.end();	

});

//Inciamos o server
server.listen(3000, function(){
	console.log("Server online na porta 3000");
})
