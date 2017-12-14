// Criamos uma variavel para representar pi
var pi = Math.PI;

/* Nos exportamos um objeto chamado area e uam funcao, 
esta funcao fica disponivel para ser utilizada para quem importar esse arquivo */
exports.area = function(r){
	return pi * r * r;
};

exports.circunferencia = function (r){return 2* pi *r;} ;
