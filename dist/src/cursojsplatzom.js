'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	//si la palabra original es un palíndromo,
	//ninguna regla anterior cuenta y se devuelve 
	//la misma palabra intercalando mayúsculas y minúsculas 
	if (reverseString(str) == str) {
		return intercalarMayusMinus(str);
	}

	//Si la palabra termina en ar se le quitan esos caracteres

	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// si la palabra inicia con z se le añade 'pe' al final 
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	//Si la palabra traducida tiene más de 9 letras,
	//se debe partir en la mitad con un guion
	if (translation.length > 9) {
		var fisrtHalf = translation.slice(0, translation.length / 2);
		var secondHalf = translation.slice(translation.length / 2, translation.length);

		translation = fisrtHalf + '-' + secondHalf;
	}

	return translation;
}

var intercalarMayusMinus = function intercalarMayusMinus(str) {
	var resp = '';
	var temp = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (i == 0 || i % 2 == 0) {
			resp += temp.charAt(i).toUpperCase();
		} else {
			resp += temp.charAt(i);
		}
	}
	return resp;
};

var reverseString = function reverseString(str) {
	var strReverse = '';
	for (var i = str.length; i >= 0; i--) {
		strReverse += str.charAt(i);
	}
	return strReverse;
};